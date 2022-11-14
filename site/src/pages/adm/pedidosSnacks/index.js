import './index.scss'
import '../../../common/common.scss'
import { useState, useEffect } from 'react';
import PedidoSnack from '../../components/snackCards/index'
import { visualizarCombos, visualizarCombosAdm } from '../../../api/pedidoAPI';
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';



export default function PedidosSnacks()  {

    const [adm, setAdm ] = useState('');

    const navigate = useNavigate();


    const [vercombo, setVerCombo] = useState([]);

    async function verCombos() {
        const resp = await visualizarCombosAdm();
        setVerCombo(resp);
      }


      useEffect(() => {
        verCombos();
    
      }, [])

    

    return(
        <section className='pedidos-combos'>
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
            <h1 className='titulo-snack'>PEDIDOS SNACKS:</h1>
        </div>

        <div className='setas-circle'>

            <div>
               <Link to='/homeadm'> <img className='voltar'  src='../images/Arrow 1.svg'/></Link>
            </div>

        </div>
        {vercombo.map(item=>
           <PedidoSnack item={item}/>
        )}
        </section>
        </section>
    )
}