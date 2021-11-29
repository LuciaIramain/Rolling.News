import React, { Fragment, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
// import Swal from 'sweetalert2';
import { withRouter } from "react-router-dom";

const NuevaNoticia = () => {
    const URL = process.env.REACT_APP_API_URL;
    console.log(URL);
    const [ tituloNoticia, setTituloNoticia] = useState('');
    const [ descripcionBreve, setDescripcionBreve ] = useState('');
    const [ descripcionDetallada, setDescripcionDetallada] = useState('');
    const [ autor, setAutor] = useState('');
    const [ fecha, setFecha] = useState('');
    const [ imagen, setImagen] = useState('');
    const [ destacada, setDestacada] = useState(false);
    const [ categoria, setCategoria ] = useState("");
    const [ error, setError ] = useState(false);

    const verNoticiaDestacada = (e) => {
        setDestacada(e.target.value);
    }

    const cambiarCategoria = (e) => {
        setCategoria(e.target.value);
    };


  return (
    <Fragment>
      <h1 className="my-4 text-center">Agregar una nueva noticia</h1>
      <Container className="my-5">
        <Form>
          {error ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
              type="checkbox" 
              label="Noticia destacada"
              name='destacada'
              value={destacada}
              onChange={verNoticiaDestacada} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Titulo de la Noticia *</Form.Label>
            <Form.Control type="text" value={tituloNoticia} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción breve *</Form.Label>
            <Form.Control type="text" value={descripcionBreve} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción detallada *</Form.Label>
            <Form.Control type="text" value={descripcionDetallada} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autor *</Form.Label>
            <Form.Control type="text" value={autor} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha *</Form.Label>
            <Form.Control type="date" value={fecha} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL *</Form.Label>
            <Form.Control type="text" value={imagen} required />
          </Form.Group>
          <section className="text-center my-3">
            <h5>Categoria *</h5>
            <Form.Check
              type="radio"
              label="Actualidad"
              name="categoria"
              value="actualidad"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Espectáculos"
              name="categoria"
              value="espectaculos"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Deportes"
              name="categoria"
              value="deportes"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Tecnología"
              name="categoria"
              value="tecnologia"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Economía"
              name="deportes"
              value="economia"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Política"
              name="categoria"
              value="politica"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Salud"
              name="categoria"
              value="salud"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Fotografía"
              name="categoria"
              value="fotografia"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
          </section>
          <Button
            variant="warning"
            className="text-light w-100 mb-5"
            type="submit">
            Agregar noticia
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default NuevaNoticia;
