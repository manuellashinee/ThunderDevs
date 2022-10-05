import './index.scss';

export default function PedidoSnack(props) {

    return(
        <section className="lanches">
            
        <div className='borda'>
           
            
            <div className='alinhamento'>
                
            <div>
            <img className='img-capa-combo' src={props.capa}/>
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
                <h2>FORMA DE PAGAMENTO:</h2>     
                </div>

                <div className='desc'>
                <label className='pagamento'>{props.pagamento} </label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>DESCRIÇÃO DO COMBO:</h2>     
                </div>

                <div className='desc'>
                <label className='descricao-combo'>{props.descricao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>TOTAL A PAGAR:</h2>     
                </div>

                <div className='desc'>
                <label className='total'>{props.total}</label>
                </div>
                
            </div>

            
           

        </div>
        </div>
        <div className='editar'>
  
        <img className='edit-img' src='../images/check_circle.svg'/>


        <img className='remove-img' src='../images/circle-x.svg'/>
       
       
        
        </div>
        

        </div>
        </section>
    )
}