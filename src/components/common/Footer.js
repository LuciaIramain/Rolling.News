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
        <h1 className="logoFooter">RollingNews</h1>
      </article>
      <article className="col-sm-12 col-md-4">
        <Link to="/contacto" className="nav-link text-light">
          Contacto
        </Link>
        <Link to="/nosotros" className="nav-link text-light">
          Acerca de Nosotros
        </Link>
        <Link to="*" className="nav-link text-light">
          Términos y Condiciones
        </Link>
        <p className="mt-2 ">Seguinos en nuestras redes sociales:</p>
        <div>
        <a href="https://es-la.facebook.com/">
          <FontAwesomeIcon
            className="me-2 fa-2x text-light"
            icon={faFacebook}
          />
        </a>
        <a href="https://www.instagram.com/?hl=es-la">
          <FontAwesomeIcon
            className="me-2 fa-2x text-light"
            icon={faInstagram}
          ></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/?lang=es">
          <FontAwesomeIcon className="fa-2x text-light" icon={faTwitter}></FontAwesomeIcon>
        </a>
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
