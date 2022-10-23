import './index.scss';
import '../../../common/common.scss'
import CompraCima from '../../components/compra-cima';
import Rodape from '../../components/rodape';

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
                                <option value="1">2X SEM JUROS</option>
                                <option value="1">3X SEM JUROS</option>
                                <option value="1">4X SEM JUROS</option>
                                <option value="1">5X SEM JUROS</option>
                            </select>
                        </div>
                        <div className='campo1'>
                            <p className='texto-pagar'>NM/AA</p>
                            <input  className='input-pagar' type='number'/>
                            <p className='texto-pagar'>CVV</p>
                            <input  className='input-pagar' type='text'/>

                            <div className='imagens'>
                                <img className='img-c' src='../images/Visa.svg'/>
                                <img className='img-c' src='../images/master.svg'/>
                                <img className='img-c' src='../images/elo.svg'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cartao2'>
                    <div className='campo2'>
                            <p className='texto-pagar'>VALOR:<span className='cartao-texto'>R$ 42,00</span></p>
                            <p className='texto-pagar'>TAXA:<span className='cartao-texto'>R$ 05,00</span></p>
                    </div>
                    <hr/>
                    <div className='texto-centro'>
                    <p className='texto-pagar'>TOTAL:<span className='cartao-texto'>R$ 47,00</span></p>
                    </div>
                </div>

                <div className='certinho'>
               <p className='botao-continuar'>FINALIZAR</p>
               
               </div>
            </div>

            <Rodape/>
        </section>
    );
}