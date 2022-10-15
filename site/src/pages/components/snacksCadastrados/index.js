import './index.scss';
import { confirmAlert } from 'react-confirm-alert';
import { retirarCombo } from '../../../api/comboapi.js';
import { useNavigate } from 'react-router-dom';

export default function SnackCadastrado(props) {

  const navigate = useNavigate();

  function editarCombo(id) {
      navigate(`/cadastrarcombo/${id}`);
  }

    async function recarregarPage(){
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
                      const resposta = await retirarCombo(id);
                      recarregarPage();
                }
              },
              {
                label:'Não'
              }
            ]
          })
      
    }

    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }

    return(
        <section className="lanches">
            
        <div className='borda'>
           
            
            <div className='alinhamento'>
                
            <div>
            <img className='img-capa-combo' src={mostrarImagem(props.item.foto)}/>
            </div>

            <div className='descricao'>
            <div className='titulo'>
                <h1>{props.item.nome}</h1>
                </div>
              

           
            <div className='padrao descricao-combo'>
                <div>
                <h2>DESCRIÇÃO DO COMBO:</h2>     
                </div>

                <div className='desc'>
                <label className='descricao-combo'>{props.item.descricao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>VALOR:</h2>     
                </div>

                <div className='desc'>
                <label className='total'>{props.item.preco}</label>
                </div>
                
            </div>

            
           

        </div>
        </div>
        <div className='edit'>
  
        <img className='edit-img' src='../images/edit.svg' onClick={() => editarCombo(props.item.id)}/>


        <img className='remove-img' src='../images/circle-x.svg' onClick={() => removerComboClick(props.item.idcombo , props.item.nome)}/>
       
       
        
        </div>
        

        </div>
        </section>
    )
}