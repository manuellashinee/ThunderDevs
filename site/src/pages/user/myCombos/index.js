import './index.scss'
import MeusCombos from '../../components/combosPedidos'
import { FiltrarComboNome, visualizarCombos } from '../../../api/pedidoAPI';

import storage from 'local-storage'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function MyCombos()  {

    const [vercombo, setVerCombo] = useState([]);
    const [ nomecombo, setNomecombo ] = useState("");

    const [usuario, setUsuario ] = useState('');

    const navigate = useNavigate();


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
                <input className='pesquisa-design' type='text'  value={nomecombo} onChange={e=> setNomecombo(e.target.value)}/>
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