import React from "react";
import { Button } from "react-bootstrap";
import error404 from "../img/error-404-1.gif";
import { Link } from "react-router-dom";
import Navegacion from "../common/Navegacion";

const Error404 = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Navegacion categoriaFiltrada={props.categoriaFiltrada} />
        <img
          src={error404}
          alt="su pagina no fue encontrada"
          className="errorSize"
        />
        <Button variant='dark' className='w-25 mb-5'>
          <Link to="/" className="text-light">
            Volver al Inicio
          </Link>
        </Button>
    </div>
  );
};

export default Error404;
