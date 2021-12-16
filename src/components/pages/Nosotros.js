import React from "react";
import Navegacion from "../common/Navegacion";
import eliana from "../img/elianaPerez.jpg";
import lucia from "../img/luciaIramain.jpg";

const Nosotros = (props) => {
  return (
    <div className="pb-5">
      <Navegacion categoriaFiltrada={props.categoriaFiltrada} />
      <section className="text-center">
        <h4 className="my-5">
          ¡Bienvenidos/as! Somos la plataforma de noticias #1 en Latinoamerica,
          noticias actuales, politica, deporte, enterate de todo lo que está
          sucediendo.
        </h4>
      </section>
      <section className="row text-center">
        <article className="col-md-6">
          <img src={eliana} alt="Eliana Perez" className="imagenNosotros rounded-circle border border-4" />
          <h5>Perez Eliana</h5>
        </article>
        <article className="col-md-6">
          <img src={lucia} alt="lucia iramain" className="imagenNosotros rounded-circle border border-4" />
          <h5>Iramain Lucía</h5>
        </article>
      </section>
      <section className="text-center py-5">
        <h4 className="my-4">
          Continuamos trabajando en nuevas tecnologias para mejorar su
          experiencia.
        </h4>
        <h4 className="my-5">
          "Un dia dejaras este mundo asi que vive una vida que recuerdes"
        </h4>
      </section>
    </div>
  );
};
export default Nosotros;
