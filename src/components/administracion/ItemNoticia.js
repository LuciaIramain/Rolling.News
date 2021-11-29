import React from 'react';
import { ListGroup, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';


const ItemNoticia = (props) => {

    const eliminarNoticia = (id) => {
        const URL = process.env.REACT_APP_API_URL+'/'+id;
        
    }

    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <section className="w-75">
                    <h5>{props.noticia.categoria}</h5>
                    <p> <strong>{props.noticia.tituloNoticia}</strong></p>
                    <p>{props.noticia.descripcionBreve}</p>
                </section>
                <section>
                    <Link to={`/administracion/editar-noticia/${props.noticia._id}`} className="btn btn-warning me-1 text-light" ><FontAwesomeIcon icon={faPencilAlt} /></Link>
                    <Button variant="danger" onClick={() => eliminarNoticia(props.noticia._id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                </section>
            </ListGroup.Item>
        </div>
    );
};

export default ItemNoticia;