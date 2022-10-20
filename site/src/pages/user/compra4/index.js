import './index.scss';
import '../../../common/common.scss'
import CompraCima from '../../components/compra-cima';


export default function Compra4(){
    return(
        <section className='compra4-page'>
            <CompraCima/>

            <div className='textos-column'>
                    <h1 className='pagamento'>PAGAMENTO:</h1>
                    <p className='pagamento2'>INFELIZMENTE SÓ ESTAMOS TRABALHANDO COM CARTÃO NO MOMENTO</p>
                </div>

            <div className='parte-2'>
                <div className='cartao1'>
                    <p className='cartao-texto'>CARTÃO DE CRÉDITO</p>
                    <hr/>
                    <div className='campos-cartao'>
                        <div className='campo1'>
                            <p className='texto-pagar'>NÚMERO DO CARTÃO</p>
                            <input className='input-pagar' type='number'/>
                            <p className='texto-pagar'>NOME DO CARTÃO</p>
                            <input  className='input-pagar' type='text'/>
                            <p className='texto-pagar'>NÚMERO DE PARCELAS</p>
                            <select className='input-pagar'>
                            <option disabled selected hidden> Selecione</option>
                                <option>2X SEM JUROS</option>
                                <option>3X SEM JUROS</option>
                                <option>4X SEM JUROS</option>
                                <option>5X SEM JUROS</option>
                            </select>
                        </div>
                        <div className='campo1'>
                            <p className='texto-pagar'>NM/AA</p>
                            <input  className='input-pagar' type='number'/>
                            <p className='texto-pagar'>CVV</p>
                            <input  className='input-pagar' type='text'/>

                            <div className='imagens'>
                                <img src='../images/Visa.svg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}