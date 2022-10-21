import './index.scss'

export default function CartaoCredito() {

    return(

        <section className='cartao-credito'>

            

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

        </section>
    )
}