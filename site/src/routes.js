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
import Catalago from './pages/user/catalogo';
import Cards from './pages/components/filmeCards';
import HomeAdm from './pages/adm/homeadm';

export default function Rotas (){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastrarfilme' element={<Cadastrar/>}/>
        <Route path='/homeadm' element={<HomeAdm/>}/>
        <Route path='/login' element={<LoginUsuario/>}/>
        <Route path='/loginAdm' element={<LoginAdm/>}/>
        <Route path='/embreve' element={<EmBreve/>}/>
        <Route path='/emcartaz' element={<EmCartaz/>}/>
        <Route path='/snackbar' element={<SnackBar/>}/>
        <Route path='/catalogo' element={<Catalago/>}/>
        <Route path='/card' element={<Cards/>}/>
    </Routes>
    </BrowserRouter>
    );
}