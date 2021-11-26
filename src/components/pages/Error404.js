import React from "react";
import { Container } from "react-bootstrap";
import error404 from "../img/error-404-1.gif";

const Error404 = () => {
  return (
    <div>
      <Container className=" ms-5 text-center">
        <img
          src={error404}
          alt="su pagina no fue encontrada"
          className="w-75"
        />
      </Container>
    </div>
  );
};

export default Error404;
