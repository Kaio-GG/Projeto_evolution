import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Anuncio from './pages/Telaanuncio';
import Login from './pages/Login';
import Publicar from './pages/Publicar';
import Cadastro from './pages/Cadastro';
import Usuario from './pages/Menuusuario';
import Home from './pages/Teladeinicio';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home/>}/>;
    <Route path='\Login' exact element={<Login/>}/>;
    <Route path='/Cadastro' exact element={<Cadastro/>}/>;
    <Route path='/Usuario' exact element={<Usuario/>}/>;
    <Route path='/Publicar' exact element={<Publicar/>}/>;
    <Route path='/Anuncio' exact element={<Anuncio/>}/>;
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

