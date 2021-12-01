import React, { Fragment, useState, useEffect, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import { campoRequerido } from "../common/validaciones";
import Swal from "sweetalert2";
import "../css/estiloGeneral.css";

const EditarNoticia = (props) => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  const [destacada, setDestacada] = useState("");
  const [categoria, setCategoria] = useState("");
  const [noticia, setNoticia] = useState({});

  const tituloNoticiaRef = useRef("");
  const descripcionBreveRef = useRef("");
  const descripcionDetalladaRef = useRef("");
  const autorRef = useRef("");
  const fechaRef = useRef("");
  const imagenRef = useRef("");

  useEffect(() => {
    consultarNoticia();
  }, []);

  const consultarNoticia = async () => {
    try {
      const res = await fetch(URL + "/" + id);
      if (res.status === 200) {
        const consulta = await res.json();
        const fechaTransf = new Date(consulta.fecha);
        const fechaT = `${fechaTransf?.getFullYear()}-${fechaTransf?.getMonth()}-${fechaTransf?.getDate()}`;
        setNoticia({...consulta, fechaT});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verNoticiaDestacada = (e) => {
    setDestacada(e.target.value);
  };

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoriaSeleccionada =
      (categoria === "") ? noticia.categoria : categoria;
    const destacadaSeleccionada =
      (destacada === "") ? noticia.destacada : destacada;
    if (
      campoRequerido(tituloNoticiaRef.current.value) === "" &&
      campoRequerido(descripcionBreveRef.current.value) === "" &&
      campoRequerido(descripcionDetalladaRef.current.value) === "" &&
      campoRequerido(autorRef.current.value) === "" &&
      campoRequerido(fechaRef.current.value) === "" &&
      campoRequerido(imagenRef.current.value) === "" &&
      campoRequerido(categoriaSeleccionada) === "" &&
      campoRequerido(destacadaSeleccionada) === ""
    ) {
      const noticiaEditada = {
        tituloNoticia: tituloNoticiaRef.current.value,
        descripcionBreve: descripcionBreveRef.current.value,
        descripcionDetallada: descripcionDetalladaRef.current.value,
        categoria: categoriaSeleccionada,
        autor: autorRef.current.value,
        fecha: fechaRef.current.value,
        imagen: imagenRef.current.value,
        destacada: destacadaSeleccionada,
      };

      try {
        const res = await fetch(URL + "/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaEditada),
        });
        if (res.status === 200) {
          Swal.fire(
            "Noticia editada!",
            "Su noticia fue modificada con éxito!",
            "success"
          );
          props.consultarAPI();
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "No se pudo modificar la noticia",
          "Por favor intentelo de nuevo más tarde",
          "error"
        );
      }
    } else {
			Swal.fire(
				"Todos los campos son obligatorios",
				"error"
			);
		}
  };

  return (
    <Fragment>
      <h1 className="my-4 text-center">Editar noticia</h1>
      <Container className="my-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Noticia destacada"
              name="destacada"
              value="destacada"
              onChange={verNoticiaDestacada}
              defaultChecked={noticia.destacada}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Titulo de la Noticia *</Form.Label>
            <Form.Control
              type="text"
              defaultValue={noticia.tituloNoticia}
              ref={tituloNoticiaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción breve *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              maxLength="500"
              defaultValue={noticia.descripcionBreve}
              ref={descripcionBreveRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción detallada *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              maxLength="10000"
              minlenght="1000"
              defaultValue={noticia.descripcionDetallada}
              ref={descripcionDetalladaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Autor *</Form.Label>
            <Form.Control
              type="text"
              defaultValue={noticia.autor}
              ref={autorRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha *</Form.Label>
            <Form.Control
              type="date"
              defaultValue={noticia.fechaT}
              ref={fechaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen URL *</Form.Label>
            <Form.Control
              type="text"
              defaultValue={noticia.imagen}
              ref={imagenRef}
            />
          </Form.Group>
          <section className="text-center my-3">
            <h5>Categoria *</h5>
            <Form.Check
              type="radio"
              label="Actualidad"
              name="categoria"
              value="Actualidad"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Actualidad"
              }
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Espectáculos"
              name="categoria"
              value="Espectáculos"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Espectáculos"
              }
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Deportes"
              name="categoria"
              value="Deportes"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Deportes"
              }
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Tecnología"
              name="categoria"
              value="Tecnología"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Tecnología"
              }
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Economía"
              name="deportes"
              value="Economía"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Economía"
              }
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Política"
              name="categoria"
              value="Política"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Política"
              }
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Salud"
              name="categoria"
              value="Salud"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Salud"
              }
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Fotografía"
              name="categoria"
              value="Fotografía"
              onChange={cambiarCategoria}
              defaultChecked={
                noticia.categoria && noticia.categoria === "Fotografía"
              }
              inline
            ></Form.Check>
          </section>
          <Button className="color text-light w-100 mb-5 mt-3" type="submit">
            Guardar cambios
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default EditarNoticia;
