import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import PedidoSnack from '../../components/snackCards/index'

export default function PedidosSnacks()  {


    return(
        <section className='pedidos-combos'>
    <section className='salvados'>
            
        <div className='cabecao'>
        <div className='cabecalho-search'>
                <div>
                <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='search-input'>
                <input className='search-design' type='text'/>
                <button  className='searching-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
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