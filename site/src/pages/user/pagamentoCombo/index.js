import './index.scss'

import CartaoCredito from '../../components/cartaoCredito';
import CompraCombo from '../../components/compraCombo';




export default function PagamentoCombo() {

    return(
        <section className='pagamento-combo'>
            <CompraCombo/>
        <div className='ajustes'>
            <div className='little-space'>
            <div className='spacezinho'><p className='nome-combo'>NOME DO COMBO:</p></div>
            <div><p className='descricao-combo'>DESCRIÇÃO DO COMBO:</p></div>
            </div>
        </div>

            <CartaoCredito/>


        </section>

       


    )
}