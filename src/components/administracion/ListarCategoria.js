import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import CategoriaParticular from './CategoriaParticular';
import NavegacionAdm from '../common/NavegacionAdm';
import "../css/estiloGeneral.css";

const ListarCategoria = (props) => {
    return (
        <div className="contenido">
            <NavegacionAdm />
            <Container>
                <h1 className="my-4 text-center">Lista de categorias</h1>
                <ListGroup>
                    {
                        props.categoriaFiltrada?.map((categoria, index) => <CategoriaParticular categoriaFiltrada={categoria} key={index} />)
                    }
                </ListGroup>
            </Container>
        </div>
    );
};

export default ListarCategoria;