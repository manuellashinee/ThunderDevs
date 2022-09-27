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
            </div>

            <div>
            <input type='text'/>
             </div>
          </div>
         </div>

        </section>
    );
}