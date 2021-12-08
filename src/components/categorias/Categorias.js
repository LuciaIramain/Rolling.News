import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import DetalleNoticia from "../pages/DetalleNoticia";

const Categorias = () => {
  const [noticias, setNoticias] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const params = useParams();
  
  // hacer un get con ese params
  useEffect(()=>{
    getNews();
  }, [])

  const getNews = async () => {
    console.log(`${URL}?categoria=${params.categoria}`)
    try{
      const res = await fetch(`${URL}?categoria=${params.categoria}`);
      if (res.status === 200) {
        const consulta = await res.json();
        console.log(consulta);
        setNoticias(consulta);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const newsCategoria = noticias.map(noticia => 
    <Card key={noticia._id} className="m-4 noticiaPrincipal">
    <Card.Img variant="top" src={noticia.imagen} />
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
    <div>
      <h1 className="text-center my-5">{params.categoria}</h1>
      <section>
        {newsCategoria}
      </section>
    </div>
  );
};

export default Categorias;
