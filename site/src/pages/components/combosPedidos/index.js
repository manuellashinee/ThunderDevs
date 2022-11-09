import './index.scss';
import { confirmAlert } from 'react-confirm-alert';
import { retirarComboPedido } from '../../../api/pedidoAPI';


export default function MeusCombos(props) {

    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }

      async function recarregarPageCombo(){
        window.location.reload();
     }

      async function removerComboClick(id, nome){
        confirmAlert({
            title: 'Remover combo',
            message:`Deseja remover ${nome}?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    const resposta = await retirarComboPedido(id)
                    recarregarPageCombo();
                    
                }
              },
              {
                label:'Não'
              }
            ]
          })
      
    }



    return (
        <section className="my-combos">

            <div className='borda'>


                <div className='alinhamento'>

                    <div>
                        <img className='img-combo' src={mostrarImagem(props.item.foto)} />
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

                        <div className='situa'>

                            <div className='padrao stop '>
                                <div>
                                    <h1>TOTAL A PAGAR:</h1>
                                </div>

                                <div className='desc'>
                                    <label className='total'>{props.item.total}</label>
                                </div>
                            </div>

                            <div className='padrao '>
                                <div>
                                    <h1>SITUAÇÃO:<span className='verde'>{props.item.status}</span></h1>
                                </div><span className='vermelho'>EXPIRADO</span>
                                

                                <div className='desc'>
                                    <label className='total'>{props.situacao}</label>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img className='situ' src='../images/circle-x.svg'  onClick={() => removerComboClick(props.item.id, props.item.nome)} />

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}