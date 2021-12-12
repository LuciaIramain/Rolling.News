import React from 'react';
import NavegacionAdm from '../common/NavegacionAdm';
import "../css/estiloGeneral.css";

const Administracion = () => {
    
    return (
        <div className="contenido">
            <NavegacionAdm />
            <h1 className="my-5 text-center fw-light">Bienvenido administrador a</h1>
            <h2 className="text-center logo logoSize">RollingNews</h2>
            <h2 className='text-center my-5 fw-light'>El diario digital con noticias 24hs en actualidad, deportes, economía, política, tecnología, entre otros. </h2>
            <h2 className='text-center my-5 fw-light'>Mantenete informado sobre las novedades de Argentina.</h2>
        </div>
    );
};

export default Administracion;