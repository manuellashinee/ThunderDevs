import './index.scss'
import MeusCombos from '../../components/combosPedidos'
import { Link } from 'react-router-dom'

export default function MyCombos()  {


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

        <MeusCombos capa='../images/combo-img.svg' nome='COMBO BIG' usuario='Manuella' pagamento='Pix' descricao='PIPOCA GRANDE, TRES REFRIGERANTE, TORTILAS COM QUEIJO CHEDAR E BALA FINI' />

           
        </section>
    </section>
    )
}