import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import MeusPedidos from '../../components/meusPedidos/index'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

export default function MyPedido()  {

    const [usuario, setUsuario ] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('usuario-logado')) {
            navigate('/');
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome)
        }
    },{})

    return(
    <section className='meus-pedidos'>
        <section className='salvados'>
            
    <div className='head'>
        <div className='cabecalho-pesquisa'>
            <div>
                <img className='logo' src='../images/logo.svg'/>
            </div>
            <div className='foto'>

             <div className='pesquisa-input'>
                <input className='pesquisa-design' type='text'/>
                <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
             </div>

             <div className='foto-perfil'>
                   <div><span className='letra-user'>{usuario[0]}</span></div>
                   <div className='nome-embaixo'><p>{usuario}</p></div>
             </div>
                
            </div>
              
              
        </div>
    </div>
        
        <div className='title'>
            <h1 className='titulo-snack'>MEUS PEDIDOS:</h1>
        </div>

        <div className='setas-circle'>
            <div>
            <Link to='/catalogo'>  <img className='voltar'  src='../images/Arrow 1.svg'/></Link>
            </div>
        </div>

        <MeusPedidos capa='../images/mini.jpg' nome='MINIONS 2' usuario='MANUELLA' meias='2' inteiras='2' pagamento='credito' sala='2' assento='D6'  hora='13' exibicao='01/12/99' total='127,00' />
           
        </section>
    </section>
    )
}