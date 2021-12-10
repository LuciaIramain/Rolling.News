import React, { Fragment } from 'react';
import NavegacionAdm from '../common/NavegacionAdm';

const Administracion = () => {
    
    return (
        <Fragment>
            <NavegacionAdm />
            <h1 className="my-4 text-center">Bienvenido administrador!</h1>
        </Fragment>
    );
};

export default Administracion;