import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import NavegacionAdm from "../common/NavegacionAdm";
import Navegacion from "../common/Navegacion";
import "../css/estiloGeneral.css";

const Categorias = (props) => {
  const [noticias, setNoticias] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const params = useParams();
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });
  const [token, setToken] = useState([]);
  
  const usuarioLogged = localStorage.getItem('usuario');
  const tokenLogged = localStorage.getItem('token');
  useEffect(()=>{
    getNews();
    if(usuarioLogged){
      const usuario = JSON.parse(usuarioLogged);
      const token = JSON.parse(tokenLogged);
      setUsuario(usuario);
      setToken(token)
    }
  }, [])

  const getNews = async () => {
    try{
      const res = await fetch(`${URL}?categoria=${params.categoria}`);
      if (res.status === 200) {
        const consulta = await res.json();
        setNoticias(consulta);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const newsCategoria = noticias.map(noticia => 
    <Card key={noticia._id} className="m-4 tamañoCard">
    <Card.Img variant="top" className="imgNoticiaCategoria" src={noticia.imagen} />
    <Card.Body>
      <Card.Title>{noticia.tituloNoticia}</Card.Title>
      <Card.Text>
       {noticia.descripcionBreve}
      </Card.Text>
      <Link to={`/detalle-noticia/${noticia._id}`} className='color btn text-light'>
        Ver más
      </Link>
    </Card.Body>
    </Card>
  );

  return (
    <div className="contenido">
      {(!tokenLogged) ? <Navegacion noticias={props.noticias} categoriaFiltrada={props.categoriaFiltrada} consultarAPI={props.consultarAPI} /> : <NavegacionAdm />}
      <h1 className="text-center my-5">{params.categoria}</h1>
        <section className='cardNoticiaCategoria'>
          {newsCategoria}
        </section>
    </div>
  );
};

export default Categorias;
