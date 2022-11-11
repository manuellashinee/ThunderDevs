import { useState } from 'react';
import './index.scss';
import { alterarStatusPedido } from '../../../api/pedidoAPI.js';

export default function PedidoSnack(props) {
    const [resposta, setResposta] = useState('');

    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }

      function aceitou(){
        setResposta('Aceito !');
        alterarStatusPedido(props.item.id);
      }
      function recusou(){
        setResposta('Recusado !');
        alterarStatusPedido(props.item.id);
      }


    return(
        <section className="lanches">
            
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
        <img className='aceitar-img' src='../images/check_circle.svg'/>
        <button onClick={aceitou}>ACEITAR</button>
        </div>

        <div className='taltal'>
        <img className='remove-img' src='../images/circle-x.svg'/>
        <button onClick={recusou}>RECUSAR</button>
        </div>
       
        
        </div>
        

        </div>
        </section>
    )
}