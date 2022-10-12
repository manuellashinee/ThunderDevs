import './index.scss';

export default function MeusPedidos(props) {

    return(
        <section className="pedidos">
            
        <div className='borda'>
           
            
            <div className='alinhamento'>
                
            <div>
            <img className='img-capa-filme' src={props.capa}/>
            </div>

            <div className='descricao'>

            <div className='titulo'>
                <h1>{props.nome}</h1>
            </div>

            <div className='padrao'>
              <div>
                <h2>NOME DE USUÁRIO:</h2>
              </div>
                <div className='remover'>
                    <div className='desc'>
                        <label className='usuario'>{props.usuario}</label>
                    </div>

                </div>
            </div>

            <div className='padrao'>
                <div>
                <h2>MEIAS:</h2>     
                </div>

                <div className='desc'>
                <label className='meias'>{props.meias} </label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                    <h2>INTEIRAS:</h2>     
                </div>
              <div className='desc'>
                <label className='inteiras'>{props.inteiras}</label>
              </div>
            </div>

            <div className='padrao'>
                <div>
                <h2>FORMA DE PAGAMENTO:</h2>     
                </div>

                <div className='desc'>
                <label className='pagamento'>{props.pagamento}</label>
                </div> 
            </div>

            <div className='padrao'>
                <div>
                <h2>SALA:</h2>     
                </div>

                <div className='desc'>
                <label className='sala'>{props.sala}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>ASSENTO</h2>     
                </div>

                <div className='desc'>
                <label className='assento'>{props.assento}</label>
                </div>
            </div>

            <div className='padrao'>
                <div>
                <h2>HORÁRIO</h2>     
                </div>

                <div className='desc'>
                <label className='hora'>{props.hora}</label>
                </div>
            </div>

            <div className='padrao'>
                <div>
                <h2>DATA DE EXIBIÇÃO:</h2>     
                </div>

                <div className='desc'>
                <label className='hora'>{props.hora}</label>
                </div>
            </div>

            <div className='padrao'>
                <div>
                <h1>TOTAL A PAGAR:</h1>     
                </div>

                <div className='desc'>
                <label className='total'>{props.total}</label>
                </div>
            </div>

        
        </div>
        </div> 
        <div className='situ'>
            <div>
                <img src='../images/circle-x.svg'/>
            </div>
            <div className='padrao situa'>
                <div>
                <h1>SITUAÇÃO:</h1>     
                </div>

                <div className='desc'>
                <label className='total'>{props.situaçaõ}</label>
                </div>
            </div>
            

        </div>

        </div>
        </section>
    )
}