import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import DetalleNoticia from "./DetalleNoticia";

const PaginaPrincipal = (props) => {


    // hacer un filter y que me muestre las categorias que necesito
    console.log(props);

  return (
    <Fragment>
      <div className="row mb-5">
        <section className="col-sm-12 col-md-6">
          <Card className="m-4 noticiaPrincipal">
            <Card.Img variant="top" src={props.noticias.imagen} />
            <Card.Body>
              <Card.Title>{props.noticias.tituloNoticia}</Card.Title>
              <Card.Text>
               {props.noticias.descripcionBreve}
              </Card.Text>
              <Button variant="primary"><DetalleNoticia /></Button>
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
    </Fragment>
  );
};

export default PaginaPrincipal;
