import { useEffect, useState } from 'react';
import { assentosIngresso, tirarFilmePedido } from '../../../api/pedidoFilmeApi';
import { AseentosP } from '../assentospedidos';
import { confirmAlert } from 'react-confirm-alert';
import './index.scss';

export default function MeusPedidos(props) {
        const [assent,setAssent]= useState([])
        
   
    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }

      async function verAssentos(id){
        const x= await assentosIngresso(id)
        console.log(x)
        setAssent(x);
      }

      
      async function recarregarPageFilme(){
        window.location.reload();
     }

      async function removerFilmeClick(id, nome){
        confirmAlert({
            title: 'Remover filme',
            message:`Deseja remover ${nome}?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    const resposta = await tirarFilmePedido(id)
                    recarregarPageFilme();
                    
                }
              },
              {
                label:'Não'
              }
            ]
          })
      
    }



      useEffect(()=>{
        verAssentos(props.item.idingresso)
      },[])


    return (
        <section className="pedidos">
            <div className='borda'>


                <div className='alinhamento'>

                    <div>
                        <img className='img-capa-filme' src={mostrarImagem(props.item.capa)} />
                    </div>

                    <div className='descricao'>

                        <div className='titulo'>
                            <h1>{props.item.filme}</h1>
                        </div>

                        <div className='padrao'>
                            <div>
                                <h2>NOME DE USUÁRIO:</h2>
                            </div>
                            <div className='remover'>
                                <div className='desc'>
                                    <label className='usuario'>{props.item.usuario}</label>
                                </div>

                            </div>
                        </div>

                        <div className='padrao'>
                            <div>
                                <h2>MEIAS:</h2>
                            </div>

                            <div className='desc'>
                                <label className='meias'>{props.item.meias} </label>
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
                                <label className='pagamento'>{props.item.formaDePagamento
}</label>
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
                                <h2>ASSENTO</h2>
                            </div>
                            {assent.map(item=>
                           <AseentosP item= {item}/>)}
                        </div>

                        <div className='padrao'>
                            <div>
                                <h2>HORÁRIO</h2>
                            </div>

                            <div className='desc'>
                                <label className='hora'>{props.item.horario}</label>
                            </div>
                        </div>

                        <div className='padrao'>
                            <div>
                                <h2>DATA DE EXIBIÇÃO:</h2>
                            </div>

                            <div className='desc'>
                                <label className='hora'>{props.item.dataExibicao.substr(8,2)}/{props.item.dataExibicao.substr(5,2)}/{props.item.dataExibicao.substr(0,4)}</label>
                            </div>
                        </div>

                        <div className='situa'>

                            <div className='padrao stop '>
                                <div>
                                    <h1>TOTAL A PAGAR:</h1>
                                </div>

                                <div className='desc'>
                                    <label className='total'>{props.item.TOTAL}</label>
                                </div>
                            </div>

                            <div className='padrao '>
                                {props.item.statusa === true?
                                <div>
                                    <h1>SITUAÇÃO:<span className='verde'>Disponível</span></h1>
                                </div>:
                                <div>
                                    <h1>SITUAÇÃO:<span className='vermelho'>Aguardando Confirmação</span></h1>
                                </div>}
                            </div>

                        </div>



                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img onClick={()=>removerFilmeClick(props.item.idingresso,"ingresso")} className='situ' src='../images/circle-x.svg' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}