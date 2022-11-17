import { useState } from 'react';
import './index.scss';
import { alterarStatusPedido1 } from '../../../api/pedidoAPI.js';
import { toast, ToastContainer } from 'react-toastify';

export default function PedidoSnack(props) {
    const [resposta, setResposta] = useState();
    const[status, setStatus]= useState('ACEITO');

    const[status2, setStatus2]= useState('RECUSADO');

        function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
        }

     

        async function alterarPedidox() {
            try{
                const pedidoId = props.item.id;
                console.log(pedidoId)

                const r = await alterarStatusPedido1(pedidoId, status)

                toast.success('Status alterado com sucesso')
            }catch (err) {
                toast.err(err.response.data.erro)
            }

    
    }

    async function alterarPedidoJ() {
        try{
            const pedidoId = props.item.id;
            console.log(pedidoId)

            const r = await alterarStatusPedido1(pedidoId, status2)

            toast('Status alterado com sucesso')
        }catch (err) {
            toast(err.response.data.erro)
        }
    }
            
    
    function BatataDoce(){
        const pedidoId = props.pedidoId;
        alert(pedidoId)
    }




    return(
        <section className="lanches">
            <ToastContainer/>
            
        <div className='borda'>
           
            
            <div className='alinhamento'>
                
            <div>
            <img className='img-capa-combo' src={mostrarImagem(props.item.foto)} />
            </div>

            <div className='descricao'>
            <div className='titulo'>
                <h1>{props.item.nome}</h1>
                </div>
               <div className='padrao'>
                <div>
                <h2>NOME DE USUÁRIO:</h2>
                </div>

                <div className='remover'>
                    <div className='desc'>
                <label className='usuario'>{props.item.nomeusuario}</label>
                    </div>

                </div>
                
            </div>

            

            <div className='padrao'>
                <div>
                <h2>DESCRIÇÃO DO COMBO:</h2>     
                </div>

                <div className='desc'>
                <label className='descricao-combo'>{props.item.descricao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>TOTAL A PAGAR:</h2>     
                </div>

                <div className='desc'>
                <label className='total'>{props.item.total}</label>
                </div>
                
            </div>

            
           

        </div>
        </div>
        <div className='edit'>
        <div className='taltal'>
        <img onClick={alterarPedidoJ} className='aceitar-img' src='../images/check_circle.svg'/>
        <p>ACEITAR</p>
        </div>

        <input className='oi' type='text' value={status} onChange = {e => setStatus(e.target.value)}/>

        <div className='taltal'>
        <img onClick={alterarPedidoJ} className='remove-img' src='../images/circle-x.svg'/>
        <p>RECUSAR</p>


        <input className='oi' type='text' value={status2} onChange = {e => setStatus2(e.target.value)}/>

        </div>
       
        
        </div>
        

        </div>
        </section>
    )
}
