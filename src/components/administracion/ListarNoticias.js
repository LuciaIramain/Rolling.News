import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import NoticiaParticular from './NoticiaParticular';
import NavegacionAdm from '../common/NavegacionAdm';
import "../css/estiloGeneral.css"

const ListarNoticias = (props) => {
    return (
        <div className='contenido'>
            <NavegacionAdm />
            <Container>
                <h1 className="my-4 text-center">Lista de noticias</h1>
                <ListGroup>
                {
                    props.noticias.map((noticia) =>  <NoticiaParticular noticia={noticia} key={noticia._id} consultarAPI={props.consultarAPI}/>)
                }
                </ListGroup>
            </Container>
        </div>
    );
};

export default ListarNoticias;