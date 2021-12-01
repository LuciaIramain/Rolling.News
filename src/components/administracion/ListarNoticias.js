import React, { Fragment } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import NoticiaParticular from './NoticiaParticular';

const ListarNoticias = (props) => {
    return (
        <Fragment>
            <Container>
                <h1 className="my-4 text-center">Lista de noticias</h1>
                <ListGroup>
                {
                    props.noticias.map((noticia) =>  <NoticiaParticular noticia={noticia} key={noticia._id} consultarAPI={props.consultarAPI}/>)
                }
                </ListGroup>
            </Container>
        </Fragment>
    );
};

export default ListarNoticias;