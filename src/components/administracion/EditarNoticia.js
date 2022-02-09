import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { campoRequerido } from "../common/validaciones";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavegacionAdm from "../common/NavegacionAdm";
import "../css/estiloGeneral.css";

const EditarNoticia = (props) => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();

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
 
  console.log(fechaRef.current.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoriaSeleccionada =
      (categoria === "") ? noticia.categoria : categoria;
    const destacadaSeleccionada =
      (destacada === "") ? noticia.destacada :  destacada;
  
    if (
      campoRequerido(tituloNoticiaRef.current.value) ||
      campoRequerido(descripcionBreveRef.current.value) ||
      campoRequerido(descripcionDetalladaRef.current.value) ||
      campoRequerido(autorRef.current.value) ||
      campoRequerido(fechaRef.current.value)  ||
      campoRequerido(imagenRef.current.value)  ||
      campoRequerido(categoriaSeleccionada)
    ) {
      Swal.fire(
				"Todos los campos son obligatorios",
				"error"
			);
    } else {
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
          navigate("/administracion/noticias");
        }
        
      } catch (error) {
        console.log(error);
        Swal.fire(
          "No se pudo modificar la noticia",
          "Por favor intentelo de nuevo más tarde",
          "error"
        );
      }
		}
  };

  const categorias = props.categoriaFiltrada?.map((categoria, index) => 
    <Form.Check
      key={index}
      type="radio"
      label={categoria}
      name="categoria"
      value={categoria}
      onChange={cambiarCategoria}
      defaultChecked={
        noticia.categoria === {categoria}
      }
      inline
    ></Form.Check>

  );

  return (
    <div className="contenido">
      <NavegacionAdm />
      <h1 className="my-4 text-center">Editar noticia</h1>
      <Container className="my-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
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
            {categorias}
          </section>
          <Button className="color text-light w-100 mb-5 mt-3" type="submit">
            Guardar cambios
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditarNoticia;
