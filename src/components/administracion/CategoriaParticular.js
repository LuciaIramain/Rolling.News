import React, { useState } from 'react';
import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CategoriaParticular = (props) => {
    
    let categoria = props.noticia.categoria;
    

    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <p>{props.noticia.categoria}</p>
                <Link to={`/categoria/${categoria}`} className='color btn text-light'>
                    Ir
                </Link>
            </ListGroup.Item>
        </div>
    );
};

export default CategoriaParticular;