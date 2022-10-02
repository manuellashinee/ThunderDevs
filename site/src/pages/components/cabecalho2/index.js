import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

export default function Cabe2() {
    return (
        <section>
                <div className='cabecalho'>
                <div className='img-logo'>
                <img className='logo' src='../images/logo.svg'/>
                <Link to='/home'><img className='flecha-c' src='../images/flecha.svg' /></Link>
                </div>
            <nav >
               <a className='links' href='/home'> INICIO </a>
               <a className='links' href='/emcartaz'> EM CARTAZ </a>
               <a className='links' href='/embreve'> EM BREVE </a>
               <a className='links' href='/snackbar'> SNACK BAR </a>
            </nav>
            <div className='botao-login'>
            <div className='pesquisa-input'>
              <input className='pesquisa-design' type='text'/>
              <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
             </div>
            </div>
        </div>
        </section>
    );

}