import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavegacionAdm from './components/common/NavegacionAdm';
import Footer from './components/common/Footer';
import PaginaPrincipal from './components/pages/PaginaPrincipal';
import Administracion from './components/pages/Administracion';
import Categorias from './components/categorias/Categorias';
import NuevaNoticia from './components/administracion/NuevaNoticia';
import NuevaCategoria from './components/administracion/NuevaCategoria';
import ListarCategoria from './components/administracion/ListarCategoria';
import ListarNoticias from './components/administracion/ListarNoticias';
import Error404 from './components/pages/Error404';
import Login from './components/pages/Login';

function App() {
  // peticion get, variable ectraigo categoria, map y hago un filtro que me muestre mi categoria
  return (
    <div>
      <Router>
        <NavegacionAdm />
        <Routes>
          <Route exact path='/' element={<PaginaPrincipal />} />
          <Route exact path='/administracion' element={<Administracion />} />
          <Route exact path='/categoria/' element={<Categorias /> } />
          <Route exact path='/administracion/nueva-noticia' element={<NuevaNoticia />} />
          <Route exact path='/administracion/nueva-categoria' element={<NuevaCategoria />} />
          <Route exact path='/administracion/noticias' element={<ListarNoticias />} />
          <Route exact path='/administracion/categorias' element={<ListarCategoria />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
