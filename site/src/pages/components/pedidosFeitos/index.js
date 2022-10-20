import './index.scss';

export default function PedidosFeitos(props) {

    return(
<section className="pedidos-feitos">
            
            <div className='borda'>
               
                
                <div className='alinhamento'>
                    
                <div>
                <img className='img-capa-filme' src={props.foto}/>
                </div>
    
                <div className='descricao'>
                <div className='titulo'>
                    <h1>{props.nome}</h1>
                    </div>
                  
    
               
                <div className='padrao descricao-combo'>
                    <div>
                    <h2>NOME DE USUÁRIO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='usuario'>{props.usuario}</label>
                    </div>
                    
                </div>
    
                <div className='padrao'>
                    <div>
                    <h2>MEIAS:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='meias'>{props.meias}</label>
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
                    <h2>ASSENTO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='assento'>{props.assento}</label>
                    </div>
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>HORÁRIO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='horario'>{props.horario}</label>
                    </div>
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>DATA DE EXPEDIÇÃO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='data'>{props.data}</label>
                    </div>
                    
                </div>

                <div className='padrao stop '>
                                <div>
                                    <h1>TOTAL A PAGAR:</h1>
                                </div>

                                <div className='desc'>
                                    <label className='total'>{props.total}</label>
                                </div>
                            </div>
    
                
               
    
            </div>
            </div>
            <div className='edit'>

                <div className='aceitar-recusa'>
                    <div><img className='check-img' src='../images/check_circle.svg' /></div>
                    <div><p>ACEITAR</p></div>
                </div>

                <div className='aceitar-recusa'>
                    <div><img className='remove-img' src='../images/circle-x.svg' /></div>
                    <div><p>RECUSAR</p></div>
                </div>
      
            
    
    
           
            
            </div>
            
    
            </div>
            </section>
    )

    
    
}