import React, { Fragment } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import CategoriaParticular from './CategoriaParticular';

const ListarCategoria = (props) => {
    return (
        <Fragment>
            <Container>
                <h1 className="my-4 text-center">Lista de categorias</h1>
                <ListGroup>
                    {
                        props.noticias.map((noticia) => <CategoriaParticular noticia={noticia} key={noticia._id} consultarAPI={props.consultarAPI} />)
                    }
                </ListGroup>
            </Container>
        </Fragment>
    );
};

export default ListarCategoria;