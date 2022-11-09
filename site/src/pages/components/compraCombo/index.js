import './index.scss'
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompraCombo() {

    const [usuario, setUsuario] = useState('');

    const navigate = useNavigate();

    useEffect (() => {
        if(!storage('usuario-logado')) {
            navigate('/');
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
         }
    }, []
)


    return(
        <section className='compra-combo'>
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
            <div className='textos-column'>
                    <h1 className='pagamento'>PAGAMENTO:</h1>
                    <p className='pagamento2'>INFELIZMENTE SÓ ESTAMOS TRABALHANDO COM CARTÃO NO MOMENTO</p>
                </div>
        </div>
        </div>
        
        </section>

    )
}