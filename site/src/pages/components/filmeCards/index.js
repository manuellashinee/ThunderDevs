import './index.scss'
import '../../../common/common.scss'
import { removerFilme } from '../../../api/filmeapi.js'
import { confirmAlert } from 'react-confirm-alert';
import { Link, useNavigate } from 'react-router-dom';


export default function FilmeCards(props) {
    const navigate = useNavigate();

    function editarFilme(id) {
        navigate(`/cadastrarfilme/${id}`);
    }
    
   async function recarregarFilme(){
      window.location.reload();
   }

   function adicinoarASala(){
    navigate(`/addsala/${props.item.id}`)
  }

   
    async function removerFilmeClick(id, nome){
        confirmAlert({
            title: 'Remover filme',
            message:`Deseja remover o filme ${nome}?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                        console.log(id)
                      const resposta = await removerFilme(id);
                      recarregarFilme();
                     
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

      
    return (
    <section className='filmes3'>
    <section className='filmes-salvos'>
        <div className='borda'>
           
            
            <div className='alinhamento'>
                
            <div>
            <img className='img-capa' src={mostrarImagem(props.item.capa)}/>
            </div>


            <div className='descricao'>
            <div className='titulo'>
                <h1 className='nome-titulo'>{props.item.nome}</h1>
                </div>
               <div className='padrao'>
                <div>
                <h2>Sinopse:</h2>
                </div>

                <div className='remover'>
                    <div className='desc'>
                <label className='sinopse'>{props.item.sinopse}</label>
                    </div>

                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Duração:</h2>     
                </div>

                <div className='desc'>
                <label className='duracao'>{props.item.duracao} min</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Atores Principais:</h2>     
                </div>

                <div className='desc'>
                <label className='atores'>{props.item.ator}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Diretor:</h2>     
                </div>

                <div className='desc'>
                <label className='diretor'>{props.item.diretor}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Gênero:</h2>     
                </div>

                <div className='desc'>
                <label className='genero'>{props.item.genero}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Classifição:</h2>     
                </div>

                <div className='desc'>
                <label className='classificacao'>{props.item.classificacao} Anos</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Avaliação:</h2>     
                </div>

                <div className='desc'>
                <label className='avaliacao'>{props.item.avaliacao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                
             <div>
                <h2>Lançamento:</h2>     
             </div>
             
                <div className='desc'>
                <label className='lancamento'>{props.item.lancamento.substr(8,2)}/{props.item.lancamento.substr(5,2)}/{props.item.lancamento.substr(0,4)}</label>
              </div>
            

            </div>
           

        </div>
        </div>
        <div className='editar'>
  
        <img className='edit-img' src='../images/edit.svg' onClick={() => editarFilme(props.item.id)}/>


        <img className='remove-img' src='../images/circle-x.svg' onClick={() => removerFilmeClick(props.item.id , props.item.nome)}/>
       
       
        <div className='l'> 
            <p onClick={adicinoarASala}>ADICIONAR FILME A UMA SALA</p>
        </div>
        </div>
        

        </div>
        </section>
        </section>
    );

}

   



