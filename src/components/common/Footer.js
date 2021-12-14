import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram,faTwitter,} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import google from "../img/google-play-badge-bb.svg";
import badge from "../img/badge-apple-store.svg";
import "../css/estiloGeneral.css";

const Footer = () => {
  return (
    <section className="row bg-dark text-light text-center py-4 mt-5 piePagina">
      <article className="col-sm-12 col-md-4 text-center">
        <Link to="/" className="nav-link logoFooter">
          RollingNews
        </Link>
      </article>
      <article className="col-sm-12 col-md-4">
        <Link to="/contacto" className="nav-link text-light">
          Contacto
        </Link>
        <Link to="/nosotros" className="nav-link text-light">
          Acerca de Nosotros
        </Link>
        <Link to="*" className="nav-link text-light">
          Terminos y Condiciones
        </Link>
        <p className="mt-2 ">Seguinos en nuestras redes sociales:</p>
        <div>
        <a href="https://es-la.facebook.com/">
          <FontAwesomeIcon
            className="me-2 fa-2x text-light"
            icon={faFacebook}
          />
        </a>
        <FontAwesomeIcon
          className="me-2 fa-2x"
          icon={faInstagram}
        ></FontAwesomeIcon>
        <FontAwesomeIcon className="fa-2x" icon={faTwitter}></FontAwesomeIcon>
        </div>
      </article>
      <article className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
        <h5>Descarga nuestra app y mejora tu expericia:</h5>
        <img src={google} alt="imagen app google" className="imgBadge mb-2" />
        <img src={badge} alt="imagen app badge" className="imgBadge" />
      </article>
    </section>
  );
};

export default Footer;
