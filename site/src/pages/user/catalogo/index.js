import './index.scss';
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import FilmeC from '../../components/filmesc';

export default function Catalogo(){
    return(
        <section className='catalogo-page'>
         <div className='img-navegar-page'>
           <div className='navegacao'>
              <p>FOTO</p>
              <p>NOME</p>

              <div className='icons-c'>
              <Link to='/home' className='icon-c'><img src='../images/Burger.svg'/></Link>
              <hr className='linhas-c'/>
              <Link to='/home' className='icon-c'><img src='../images/shopping_cart.svg'/></Link>
              <hr className='linhas-c'/>
              <Link to='/home' className='icon-c'><img src='../images/Login.png'/></Link>
              </div>
              <hr className='linhas-c'/>
           </div>
           
            <div className='cabecalho-pesquisa'>
            <div>
            <img className='logo' src='../images/logo.svg'/>
            <p className='bem-vindes'>BEM VINDES AO NOSSO CATÁLOGO</p>
            </div>

            <div className='pesquisa-input'>
              <input className='pesquisa-design' type='text'/>
              <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
             </div>
          </div>
         </div>

           <div className='pagina-baixo'>

            <div className='texto-select'>
              <p className='texto-catalogo'>FILMES DA MARVEL</p>

              <select  className='campos input-linhas'> 
                <option disabled selected hidden> Selecione a categoria </option>
                 <option>LALALALALALLA</option>
              </select>
            </div>

            <div className='cards-filmes'>
              <FilmeC imagem='../images/filmeruim.png' titulo='THOR AMOR E TROVÃO' data='15/12/2022'/>
              <FilmeC imagem='../images/amizade.jpg' titulo='NARUTO E SASUKE' data='15/12/2022'/>
              <FilmeC imagem='../images/img-interessante.jpg' titulo='EVANGELION' data='15/12/2022'/>
              <FilmeC imagem='../images/ticoeteco.jpg' titulo='TARTARUGAS NINJAS' data='15/12/2022'/>
              <FilmeC imagem='../images/red.jpg' titulo='RED: CRESCER É UMA FERA' data='15/12/2022'/>
            </div>
           </div>
           <hr/>
        </section>
    );
}