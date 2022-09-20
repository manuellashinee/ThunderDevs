import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastrar from './pages/cadastrarf';
import LoginAdm from  './pages/adm/login';

export default function Rotas (){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<App/>}/>
        <Route path='/cadastrarfilme' element={<Cadastrar/>}/>
        <Route path='/loginAdm' element={<LoginAdm/>}/>
    </Routes>
    </BrowserRouter>
    );
}