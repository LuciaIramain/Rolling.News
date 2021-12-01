import React from 'react';
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriaParticular = (props) => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <p>{props.noticia.categoria}</p>
                <Link to='/categoria/' className='color btn text-light'>
                    Ir
                </Link>
            </ListGroup.Item>
        </div>
    );
};

export default CategoriaParticular;