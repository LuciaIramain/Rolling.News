import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/estiloGeneral.css";

const DetalleNoticia = () => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  const [noticia, setNoticia] = useState({});

  useEffect(() => {
    consultarNoticia();
  }, []);

  const consultarNoticia = async () => {
    try {
      const res = await fetch(URL + "/" + id);
      if (res.status === 200) {
        const consulta = await res.json();
        const fechaTrans = new Date(consulta.fecha);
        const fechaTra = `${fechaTrans?.getDate()}-${fechaTrans?.getMonth()}-${fechaTrans?.getFullYear()}`;
        setNoticia({...consulta, fechaTra});
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Fragment>
      <section className="container">
      <h2 className="my-5 colorTexto">{noticia.categoria}</h2> 
      <h1 className="my-4 colorTexto">{noticia.tituloNoticia}</h1>
      <p className="my-3 lead textoNoticia">{noticia.descripcionBreve}</p> 
      <p className="my-2">{noticia.fechaTra}</p>
      <p className="my-2">{noticia.autor}</p> 
      <img src={noticia.imagen} alt="imagen noticia" className="my-3 imgNoticia"/>
      <p className="my-5 textoNoticia">{noticia.descripcionDetallada}</p> 
      </section>
    </Fragment>
  );
};

export default DetalleNoticia;
