import storage from 'local-storage'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import '../../../common/common.scss'




export default function CabecalhoP(){
    const [usuario, setUsuario] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('usuario-logado')) {
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
        }
    },{})


    return(
        <section className='compra1'>
            <div className='parte-1'>
            <div className='head-cabecalho'>
            <div className='cabecalho-pesquisa'>
                <div>
                    <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='foto'>
                   <div className='foto-perfil'>
                   <div><span className='letra-user'>{usuario[0]}</span></div>
                   <div><p className='nome-user'>{usuario}</p></div>
                   </div>
                </div>
                </div>
                </div>
                </div>
                </section>
                );
                }