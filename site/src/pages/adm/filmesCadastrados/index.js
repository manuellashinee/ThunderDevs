import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import FilmeCards from '../../components/filmeCards/index';

export default function Filmes(){

   

    return(
        <section className='salvos'>
    <div className='head'>
        <div>
        <img src='../images/logo.svg'/>
        </div>

         <div className='pesquisa-input'>
              <input className='pesquisa-design' type='text'/>
              <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
        </div>
     </div>
     <div>
        <h1>FILMES CADASTRADOS:</h1>
     </div>

     <div className='setas-circle'>

        <div>
            <img src='../images/Arrow 1.svg'/>
        </div>

        <div>
            <img src='../images/circle-mais.svg'/>
        </div>

     </div>

     <FilmeCards imagem='../images/moonlight.png' nome='MOONLIGHT: SOBRE A LUZ DO LUAR' sinopse='Black trilha uma jornada de autoconhecimento  enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami...' duracao='180 min'  atores='Sam Worthington, Zoe Saldana, Sigourney Weaver '
     diretor=' Barry Jenkins' genero='Aventura' classificacao='12 anos' avaliacao='4.5' lancamento=''/>
    

            

        

        </section>
    );
}
