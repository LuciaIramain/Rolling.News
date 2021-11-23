import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import PaginaPrincipal from './components/pages/PaginaPrincipal';
import Administracion from './components/pages/Administracion';
import Actualidad from './components/categorias/Actualidad';
import Deportes from './components/categorias/Deportes';
import Economia from './components/categorias/Economia';
import Espectaculos from './components/categorias/Espectaculos';
import Fotografia from './components/categorias/Fotografia';
import Politica from './components/categorias/Politica';
import Salud from './components/categorias/Salud';
import Tecnologia from './components/categorias/Tecnologia';


function App() {
  return (
    <div>
      <Router>
        <Navegacion />
        <Routes>
          <Route exact path='/' element={<PaginaPrincipal />} />
          <Route exact path='/administracion' element={<Administracion />} />
          <Route exact path='/categoria/actualidad' element={<Actualidad /> } />
          <Route exact path='/categoria/deportes' element={<Deportes /> } />
          <Route exact path='/categoria/economia' element={<Economia /> } />
          <Route exact path='/categoria/espectaculos' element={<Espectaculos /> } />
          <Route exact path='/categoria/fotografia' element={<Fotografia /> } />
          <Route exact path='/categoria/politica' element={<Politica /> } />
          <Route exact path='/categoria/salud' element={<Salud /> } />
          <Route exact path='/categoria/Tecnologia' element={<Tecnologia /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
