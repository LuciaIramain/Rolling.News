import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import "../css/estiloGeneral.css";

const NoticiaParticular = (props) => {
  const eliminarNoticia = (id) => {
    const URL = process.env.REACT_APP_API_URL + "/" + id;
    Swal.fire({
      title: "¿Estas seguro de eliminar la noticia?",
      text: "No puedes volver a recuperar esta información",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          if (respuesta.status === 200) {
            // mostrar el cartel
            Swal.fire(
              "Noticia eliminada",
              "La noticia se eliminó correctamente",
              "success"
            );
            // actualizar los datos
            props.consultarAPI();
          } else {
            Swal.fire("Se produjo un error", "Intentelo nuevamente", "error");
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Se produjo un error",
            "Intentelo en unos minutos",
            "error"
          );
        }
      }
    });
  };

  return (
    <div>
      {!props.noticia.tituloNoticia 
      ? 
        ''
       : 
        <ListGroup.Item className="d-flex justify-content-between">
          <section className="w-75 ">
            <h5>{props.noticia.categoria}</h5>
            <p>
              <strong>{props.noticia.tituloNoticia}</strong>
            </p>
            <p>{props.noticia.descripcionBreve}</p>
          </section>
          <section className="listaNoticia">
            <Link
              to={`/administracion/editar-noticia/${props.noticia._id}`}
              className="btn color me-1 text-light"
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Link>
            <Button
              variant="danger"
              onClick={() => eliminarNoticia(props.noticia._id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </section>
        </ListGroup.Item>
      }
    </div>
  );
};

export default NoticiaParticular;
