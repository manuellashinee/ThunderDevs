import './index.scss';
import '../../../common/common.scss'
import CompraCima from '../../components/compra-cima';


export default function Compra4(){
    return(
        <section className='compra4-page'>
            <CompraCima/>
            <div className='parte-2'>
                <div className='textos-column'>
                    <h1 className='pagamento'>PAGAMENTO:</h1>
                    <p className='pagamento2'>INFELIZMENTE SÓ ESTAMOS TRABALHANDO COM CARTÃO NO MOMENTO</p>
                </div>

                <div className='cartao1'>
                    <p className='cartao-texto'>CARTÃO DE CRÉDITO</p>
                </div>
            </div>
        </section>
    );
}