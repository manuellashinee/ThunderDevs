import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import PedidoSnack from '../../components/snackCards/index'

export default function PedidosSnacks()  {


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
               <div><img  className='perfil' src='../images/elizinha.svg'/></div>
               <div><p>Manu</p></div>
               </div>
                
            </div>
              
              
        </div>
    </div>
        
        <div className='title'>
            <h1>PEDIDOS SNACKS:</h1>
        </div>

        <div className='setas-circle'>

            <div>
                <img className='voltar'  src='../images/Arrow 1.svg'/>
            </div>

        </div>
           
           <PedidoSnack capa ='../images/imagem_combo.svg' nome='Combo Big' usuario='Manuella' pagamento='pix' descricao='pipoca grande, três refris' total='170,00'  />
        </section>
        </section>
    )
}