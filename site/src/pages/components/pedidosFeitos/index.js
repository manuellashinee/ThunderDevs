import { useEffect, useState } from 'react';
import { assentosIngresso, mudarStatusPedidoFilme } from '../../../api/pedidoFilmeApi.js';
import { AseentosP } from '../assentospedidos/index.js';
import { toast } from 'react-toastify';
import './index.scss';

export default function PedidosFeitos(props) {
    const [assent,setAssent]= useState([]);
    const[status, setStatus]= useState(1);
    const[status2, setStatus2]= useState(0);

    
    async function alterarPedidox() {
        try{
            const pedidoId = props.item.idingresso;
            console.log(pedidoId)

            const r = await mudarStatusPedidoFilme(status,pedidoId)
            toast.success("Pedido Aceito")
        }catch (err) {
            toast.err(err.response.data.erro)
        }


    }

    async function alterarPedidoJ() {
    try{
        const pedidoId = props.item.idingresso;

        const r = await mudarStatusPedidoFilme(status2,pedidoId)
        
        toast.error("Pedido Recusado")
    }catch (err) {
        toast.err(err.response.data.erro)
    }
    }


    
    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
    }

      
      async function verAssentos(id){
        const x= await assentosIngresso(id)
        setAssent(x);
      }

      useEffect(()=>{
        verAssentos(props.item.idingresso)
      },[])


    return(
    <section className="pedidos-feitos">
           
            <div className='borda'>
               
                
                <div className='alinhamento'>
                    
                <div>
                <img className='img-capa-filme' src={mostrarImagem(props.item.capa)}/>
                </div>
    
                <div className='descricao'>
                <div className='titulo'>
                    <h1>{props.item.filme}</h1>
                    </div>
                  
    
               
                <div className='padrao descricao-combo'>
                    <div>
                    <h2>NOME DE USUÁRIO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='usuario'>{props.item.usuario}</label>
                    </div>
                    
                </div>
    
                <div className='padrao'>
                    <div>
                    <h2>MEIAS:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='meias'>{props.item.meias}</label>
                    </div>
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>INTEIRAS:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='inteiras'>{props.item.inteiras}</label>
                    </div>
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>FORMA DE PAGAMENTO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='pagamento'>{props.item.formaDePagamento}</label>
                    </div>
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>SALA:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='sala'>{props.item.sala}</label>
                    </div>
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>ASSENTO:</h2>     
                    </div>
                {assent.map(item=>
                <AseentosP item={item}/>)}
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>HORÁRIO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='horario'>{props.item.horario}</label>
                    </div>
                    
                </div>

                <div className='padrao'>
                    <div>
                    <h2>DATA DE EXPEDIÇÃO:</h2>     
                    </div>
    
                    <div className='desc'>
                    <label className='data'>{props.item.dataExibicao.substr(8,2)}/{props.item.dataExibicao.substr(5,2)}/{props.item.dataExibicao.substr(0,4)}</label>
                    </div>
                    
                </div>

                <div className='padrao stop '>
                                <div>
                                    <h1 className='branco'>TOTAL A PAGAR:</h1>
                                </div>

                                <div className='desc'>
                                    <label className='total'>{props.item.TOTAL}</label>
                                </div>
                            </div>
    
                
               
    
            </div>
            </div>
            <div className='edit'>

                <div className='aceitar-recusa'>
                    <div><img className='check-img' src='../images/check_circle.svg' onClick={alterarPedidox} /></div>
                    <div><p className='a-r'>ACEITAR</p></div>
                </div>

                <div className='aceitar-recusa'>
                    <div><img className='remove-img' src='../images/circle-x.svg'onClick={alterarPedidoJ} /></div>
                    <div><p className='a-r'>RECUSAR</p></div>
                </div>
      
            
    
    
           
            
            </div>
            
    
            </div>
            </section>
    )

    
    
}