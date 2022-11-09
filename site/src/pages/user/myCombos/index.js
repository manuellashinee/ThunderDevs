import './index.scss'
import MeusCombos from '../../components/combosPedidos'
import { FiltrarComboNome, visualizarCombos } from '../../../api/pedidoAPI';

import storage from 'local-storage'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';



export default function MyCombos()  {

    const [vercombo, setVerCombo] = useState([]);
    const [ nomecombo, setNomecombo ] = useState("");

    async function verCombos() {
        const resp = await visualizarCombos(storage('usuario-logado').id);
        setVerCombo(resp);
      }

      async function filtrarPedidoCombo(){
        const fil= await FiltrarComboNome(nomecombo)
        setVerCombo(fil);
    }

    useEffect(() => {
        filtrarPedidoCombo();
    }, [nomecombo])
     


      useEffect(() => {
        verCombos();
    
      }, [])
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
                <input className='pesquisa-design' type='text'  value={nomecombo} onChange={e=> setNomecombo(e.target.value)}/>
                <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
             </div>

               <div className='foto-perfil'>
               <div><img  className='perfil' src='../images/elizinha.svg'/></div>
               <div><p>Manu</p></div>
               </div>
                
            </div>
              
              
        </div>
    </div>
        
        <div className='title'>
            <h1 className='titulo-snack'>MEUS COMBOS:</h1>
        </div>

        <div className='setas-circle'>
            <div>
             <Link to='/catalogo'>   <img className='voltar'  src='../images/Arrow 1.svg'/> </Link>
            </div>
        </div>


        {vercombo.map(item=>
              <MeusCombos item={item} />
          )}
     

           
        </section>
    </section>
    )
}