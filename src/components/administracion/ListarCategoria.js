import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import CategoriaParticular from './CategoriaParticular';
import NavegacionAdm from '../common/NavegacionAdm';
import "../css/estiloGeneral.css";

const ListarCategoria = (props) => {

    // const categoriaFiltrada = props.noticias.filter()
    // console.log(categoriaFiltrada);
    // console.log(props.noticias.categoria)

    return (
        <div className="contenido">
            <NavegacionAdm />
            <Container>
                <h1 className="my-4 text-center">Lista de categorias</h1>
                <ListGroup>
                    {
                        props.noticias.map((noticia) => <CategoriaParticular noticia={noticia} key={noticia._id} consultarAPI={props.consultarAPI} />)
                    }
                </ListGroup>
            </Container>
        </div>
    );
};

export default ListarCategoria;