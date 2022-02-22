import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavegacionAdm from "../common/NavegacionAdm";
import Navegacion from "../common/Navegacion";
import moment from 'moment';
import "../css/estiloGeneral.css";

const DetalleNoticia = (props) => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  const [noticia, setNoticia] = useState({});
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });
  const [token, setToken] = useState([]);

  const usuarioLogged = localStorage.getItem('usuario');
  const tokenLogged = localStorage.getItem('token');

  useEffect(() => {
    consultarNoticia();
    if(usuarioLogged){
      const usuario = JSON.parse(usuarioLogged);
      const token = JSON.parse(tokenLogged);
      setUsuario(usuario);
      setToken(token)
    }
  }, []);

  const consultarNoticia = async () => {
    try {
      const res = await fetch(URL + "/" + id);
      if (res.status === 200) {
        const consulta = await res.json();
        const fechaTransf = new Date(consulta.fecha);
        const fechaTran = new Date(fechaTransf.getTime() + fechaTransf.getTimezoneOffset() * 60000);
        const fechaT = moment(fechaTran).format("DD-MM-YYYY");
        setNoticia({...consulta, fechaT});
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="contenido">
      {(!tokenLogged) ? <Navegacion noticias={props.noticias} categoriaFiltrada={props.categoriaFiltrada} /> : <NavegacionAdm />}
      <section className="container">
        <h2 className="my-5 colorTexto">{noticia.categoria}</h2> 
        <h1 className="my-4 colorTexto">{noticia.tituloNoticia}</h1>
        <p className="my-3 lead textoNoticia">{noticia.descripcionBreve}</p> 
        <p className="my-2">{noticia.fechaT}</p>
        <p className="my-2">{noticia.autor}</p> 
        <img src={noticia.imagen} alt="imagen noticia" className="my-3 imgNoticia"/>
        <p className="my-5 textoNoticia lh-1">{noticia.descripcionDetallada}</p> 
      </section>
    </div>
  );
};

export default DetalleNoticia;
