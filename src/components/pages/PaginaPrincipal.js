import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navegacion from "../common/Navegacion";
import covid  from "../img/covid.jpg"
import covid2  from "../img/covid2.jpg"
import mandalorian  from "../img/Mandalorian.jpg"
import primeVideo from "../img/primeVideo.jpg"
import "../css/estiloGeneral.css";

const PaginaPrincipal = (props) => {
  
    // hacer un filter y que me muestre las categorias que necesito
    const noticias = props.noticias;
    const destacada = noticias?.filter(dest => dest.destacada);
    const deportes = noticias?.filter(deporte => deporte.categoria === 'Deportes');
    const economia = noticias?.filter(econo => econo.categoria === 'Economía');
    const salud = noticias?.filter(sal => sal.categoria === 'Salud');
    
    const noticiaDestacada = destacada?.map(noticia => 
      <Card className="m-4 w-25" key={noticia._id}>
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

    const noticiaDeportes = deportes?.map(
      noticia => 
      <Card className="m-4 w-25" key={noticia._id}>
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

    const noticiaEconomia = economia?.map(
      noticia => 
      <Card className="m-4 w-25" key={noticia._id}>
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

    const noticiaSalud = salud?.map(
      noticia => 
      <Card className="m-4 w-25" key={noticia._id}>
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
    <div className="contenido">
      <Navegacion noticias={props.noticias} categoriaFiltrada={props.categoriaFiltrada} consultarAPI={props.consultarAPI} />
      <section className="d-flex justify-content-evenly">
        <p>clima</p>
        
      </section>
      <main className="mainPrincipal">
      <section>
      <div className="row mb-5">
        <h1 className="ms-4 colorTexto">Actualidad</h1>
        <section className="d-flex ">
          {noticiaDestacada}
        </section>
      </div>
      </section>
      <section className="mb-4">
        <h2 className="ms-4 colorTexto">Deportes</h2>
        <article className="d-flex">
          {noticiaDeportes}
        </article>
      </section>
      <section className="mb-4">
      <h2 className="ms-4 colorTexto">Economía</h2>
        <article className="d-flex">
          {noticiaEconomia}
        </article>
      </section>
      <section>
        <h2 className="ms-4 colorTexto">Salud</h2>
        <article className="d-flex">
          {noticiaSalud}
        </article>
      </section>
      </main>
      <aside className="asidePrincipal">
        <section className="mt-5 mb-3 text-center">
          <h4 className="mb-3">¡Con tu suscripción podés ganar un mes gratis en Disney+ ¿Te lo vas a perder?!</h4>
          <img src={mandalorian} alt="publicidad de mandalorian" />
        </section>
        <img src={covid} alt="banner covid" className="imgCovid"/>
        <img src={primeVideo} alt="publicidad de prime video" className="imgPrime" />
        <img src={covid2} alt="banner de covid" className="covidImg2" />
      </aside>
    </div>
  );
};

export default PaginaPrincipal;
