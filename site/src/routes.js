import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastrar from './pages/cadastrarf';
import LoginAdm from  './pages/adm/login';
import LoginUsuario from './pages/usuarioLogin';
import Home from './pages/home';
import EmBreve from './pages/user/embreve';
import EmCartaz from './pages/user/emcartaz';
import SnackBar from './pages/user/snackbar';
import Catalogo from './pages/user/catalogo';

export default function Rotas (){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastrarfilme' element={<Cadastrar/>}/>
        <Route path='/login' element={<LoginUsuario/>}/>
        <Route path='/loginAdm' element={<LoginAdm/>}/>
        <Route path='/embreve' element={<EmBreve/>}/>
        <Route path='/emcartaz' element={<EmCartaz/>}/>
        <Route path='/snackbar' element={<SnackBar/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
    </Routes>
    </BrowserRouter>
    );
}