import './index.scss';
import PedidosFeitos from '../../components/pedidosFeitos';
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PedidosAdm() {

    const [adm, setAdm ] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        if(!storage('ADM-Logado')){
            navigate('/homeadm');
        }
        else{
          const admLogado = storage('ADM-Logado');
          setAdm(admLogado.nome);
        }
    }, [])

    return (

        <section className='pedidos-adm'>
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
                   <div><span className='letra-user'>{adm[0]}</span></div>
                   <div className='nome-embaixo'><p>{adm}</p></div>
             </div>
                
            </div>
              
              
        </div>
    </div>
        
        <div className='title'>
            <h1 className='titulo-snack'>PEDIDOS FEITOS:</h1>
        </div>

        <div className='setas-circle'>
            <div>
              <Link to='/homeadm' > <img className='voltar'  src='../images/Arrow 1.svg'/></Link>
            </div>
        </div>

           <PedidosFeitos capa='../images/mini.jpg' nome='MINIONS 2' usuario='Manuella' meias='2' inteiras=''/>
        </section>
    </section>
    )
}
