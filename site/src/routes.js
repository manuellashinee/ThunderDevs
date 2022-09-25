import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastrar from './pages/cadastrarf';
import LoginAdm from  './pages/adm/login';
import LoginUsuario from './pages/usuarioLogin';
import Home from './pages/home';
import Cabecalhoo from './componentes/cabecalho';

export default function Rotas (){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/c' element={<Cabecalhoo/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastrarfilme' element={<Cadastrar/>}/>
        <Route path='/login' element={<LoginUsuario/>}/>
        <Route path='/loginAdm' element={<LoginAdm/>}/>
    </Routes>
    </BrowserRouter>
    );
}