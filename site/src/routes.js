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
import FilmeCards from './pages/components/filmeCards';
import HomeAdm from './pages/adm/homeadm';
import Filmes from './pages/adm/filmesCadastrados';
import Cadastrarcombo from './pages/adm/cadastrarcombo';
import CadastrarUser from './pages/user/cadastrarUser';
import PedidosSnacks from './pages/adm/pedidosSnacks';
import SnackCadastro from './pages/adm/SnacksCadastrados';
import Compra1 from './pages/user/compra1';
import FilmeDetalhe from './pages/user/filmedetalhe';


export default function Rotas (){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastrarfilme' element={<Cadastrar/>}/>
        <Route path='/cadastrarfilme/:idParam' element={<Cadastrar/>}/>
        <Route path='/homeadm' element={<HomeAdm/>}/>
        <Route path='/login' element={<LoginUsuario/>}/>
        <Route path='/loginAdm' element={<LoginAdm/>}/>
        <Route path='/embreve' element={<EmBreve/>}/>
        <Route path='/emcartaz' element={<EmCartaz/>}/>
        <Route path='/snackbar' element={<SnackBar/>}/>
        <Route path='/catalogo' element={<Catalago/>}/>
        <Route path='/filmeCard' element={<FilmeCards/>}/>
        <Route path='/filmes' element={<Filmes/>}/>
        <Route path='/cadastrarcombo' element={<Cadastrarcombo/>}/>
        <Route path='/cadastraruser' element={<CadastrarUser/>}/>
        <Route path='/pedidosnack' element={<PedidosSnacks/>}/>
        <Route path='/snacks' element={<SnackCadastro/>}/>
        <Route path='/compra1' element={<Compra1/>}/>
        <Route path='/filmedetalhe' element={<FilmeDetalhe/>}/>
    </Routes>
    </BrowserRouter>
    );
}