import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import CategoriaParticular from './CategoriaParticular';
import NavegacionAdm from '../common/NavegacionAdm';
import "../css/estiloGeneral.css";

const ListarCategoria = (props) => {

    const cate = props.noticias;
    const categoriaArr = new Set(cate);
    let resultadoCategoria = [...categoriaArr];
    console.log(resultadoCategoria);

    // hacer que me filtre por categoria y despues un map con
    const categoriaUnica = resultadoCategoria.filter(() => props.noticias.categoria === 'Economía')
    console.log(categoriaUnica)

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