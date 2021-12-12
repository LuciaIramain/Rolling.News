import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavegacionAdm from "../common/NavegacionAdm";

const NuevaCategoria = (props) => {
  const URL = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();

  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoria.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);
      const nuevaCategoria = { categoria };
      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaCategoria)
        };
        const res = await fetch(URL, parametros);
        console.log(res);
        if ((await res.status) === 201) {
          Swal.fire(
            "Categoría agregada!",
            "Se cargo una nueva categoría en RollingNews!",
            "success"
          );

          setCategoria("");
          props.consultarAPI();
          navigate("/administracion/categorias");
        } else {
          Swal.fire(
            "Error 500 al tratar de agregar la categoría",
            "Por favor intentelo de nuevo más tarde",
            "error"
          );
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "No se pudo agregar la categoría",
          "Por favor intentelo de nuevo más tarde",
          "error"
        );
      }
    }
  };

  return (
    <div className="contenido">
      <NavegacionAdm />
      <h1 className="my-4 text-center">Agregar una nueva categoria</h1>
      <Form onSubmit={handleSubmit}>
        <Container>
          {error ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tecnología"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </Form.Group>
          <Button className="color text-light w-100 mb-5 mt-3" type="submit">
            Añadir categoría
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default NuevaCategoria;
