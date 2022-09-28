import './index.scss';
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

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

        </section>
    );
}