import './index.scss';

export default function SnackCadastrado(props) {

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
              

           
            <div className='padrao descricao-combo'>
                <div>
                <h2>DESCRIÇÃO DO COMBO:</h2>     
                </div>

                <div className='desc'>
                <label className='descricao-combo'>{props.descricao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>VALOR:</h2>     
                </div>

                <div className='desc'>
                <label className='total'>{props.valor}</label>
                </div>
                
            </div>

            
           

        </div>
        </div>
        <div className='edit'>
  
        <img className='edit-img' src='../images/edit.svg'/>


        <img className='remove-img' src='../images/circle-x.svg'/>
       
       
        
        </div>
        

        </div>
        </section>
    )
}