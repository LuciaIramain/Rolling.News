import React from "react";
import { Card, Button } from "react-bootstrap";
import Navegacion from "../common/Navegacion";
import "../css/estiloGeneral.css";

const PaginaPrincipal = (props) => {
  
    // hacer un filter y que me muestre las categorias que necesito
   
  return (
    <div className="contenido">
      <Navegacion noticias={props.noticias} categoriaFiltrada={props.categoriaFiltrada} consultarAPI={props.consultarAPI} />
      <div className="row mb-5">
        <section className="col-sm-12 col-md-6">
          <Card className="m-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </section>
        <section className="col-sm-12 col-md-6">
          <Card className="m-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="m-4">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default PaginaPrincipal;
