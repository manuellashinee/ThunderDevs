import './index.scss'
import '../../../common/common.scss'

export default function FilmeCards(props) {


    return (
        <section className='filmes-salvos'>
            <div className='borda'>

            <div>
            <img className='img-capa' src={props.imagem}/>
            </div>
           
            
            <div className='alinhamento'>
            <div className='descricao'>

            <div className='editar'>
                <div className='titulo'>
                <h1 className='nome-titulo'>{props.nome}</h1>
                </div>

                    <div className='esquerda'>
                         <img className='edit-img' src='../images/edit.svg'/>
                    </div>
            </div>

               <div className='padrao'>
                <div>
                <h2>Sinopse:</h2>
                </div>

                <div className='remover'>
                    <div className='desc'>
                <label className='sinopse'>{props.sinopse}</label>
                    </div>

                    <div>
                        <img className='remove-img' src='../images/circle-x.svg'/>
                    </div>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Duração:</h2>     
                </div>

                <div className='desc'>
                <label className='duracao'>{props.duracao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Atores Principais:</h2>     
                </div>

                <div className='desc'>
                <label className='atores'>{props.atores}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Diretor:</h2>     
                </div>

                <div className='desc'>
                <label className='diretor'>{props.diretor}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Gênero:</h2>     
                </div>

                <div className='desc'>
                <label className='genero'>{props.genero}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Classifição:</h2>     
                </div>

                <div className='desc'>
                <label className='classificacao'>{props.classificacao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Avaliação:</h2>     
                </div>

                <div className='desc'>
                <label className='avaliacao'>{props.avaliacao}</label>
                </div>
                
            </div>

            <div className='padrao'>
                <div>
                <h2>Lançamento:</h2>     
                </div>

                <div className='desc'>
                <label className='lancamento'>{props.lancamento}</label>
                </div>
                
            </div>
        </div>
        </div>

     </div>
        </section>
    );

}

   



