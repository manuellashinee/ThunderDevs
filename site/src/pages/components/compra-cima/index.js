import './index.scss';
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompraCima(){
    const [usuario, setUsuario] = useState('');

    const navigate = useNavigate();

    useEffect (() => {
        if(!storage('usuario-logado')) {
            navigate('/');
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
         }
    }, [])

    return(

        <section className='compra1'>
            <div className='parte-1'>
            <div className='head'>
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
            <Link to='/'><img className='flecha-c' src='../images/flecha.svg' /></Link>
            <div className='textos-cimabaixo'>
                <p className='titulo'>AVATAR 2</p>
                <div className='sub-textos'>
                    <p className='categoria1'>12</p>
                    <p className='categoria2'>180 min</p>
                    <p className='categoria2'>AVENTURA</p>
                </div>
            </div>
        </div>
        </div>
        </section>

    );
}