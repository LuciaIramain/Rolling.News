import React, {useState, useEffect} from 'react';
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
import EditarNoticia from './components/administracion/EditarNoticia';
import DetalleNoticia from './components/pages/DetalleNoticia';
import NuevaCuenta from './components/administracion/NuevaCuenta';

function App() {
  // peticion get, variable ectraigo categoria, map y hago un filtro que me muestre mi categoria
  const URL = process.env.REACT_APP_API_URL;
  
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try{
      const consulta = await fetch(URL);
      const respuesta = await consulta.json(); 
      setNoticias(respuesta);
    } catch(error) {
      console.log(error);
    }
  }


  return (
    <div>
      <Router>
        <NavegacionAdm />
        <Routes>
          <Route exact path='/' element={<PaginaPrincipal />} />
          <Route exact path='/administracion' element={<Administracion />} />
          <Route exact path='/categoria/:categoria' element={<Categorias noticias={noticias} consultarAPI={consultarAPI} /> } />
          <Route exact path='/detalle-noticia/:id' element={<DetalleNoticia consultarAPI={consultarAPI} />}/>
          <Route exact path='/administracion/nueva-noticia' element={<NuevaNoticia noticias={noticias} consultarAPI={consultarAPI} />} />
          <Route exact path='/administracion/nueva-categoria' element={<NuevaCategoria consultarAPI={consultarAPI} />} />
          <Route exact path='/administracion/noticias' element={<ListarNoticias noticias={noticias} consultarAPI={consultarAPI} />} />
          <Route exact path='/administracion/categorias' element={<ListarCategoria noticias={noticias} consultarAPI={consultarAPI} />} />
          <Route exact path='/administracion/editar-noticia/:id' element={<EditarNoticia consultarAPI={consultarAPI} />} />
          <Route exact path='/administracion/nueva-cuenta' element={<NuevaCuenta />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
