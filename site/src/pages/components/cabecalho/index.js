import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';


export default function Cards() {
    return (
        <section>
                <div className='cabecalho'>
                <div className='img-logo'>
                <img className='logo' src='../images/logo.svg'/>
                </div>
            <nav >
               <a className='links' href='/home'> INICIO </a>
               <a className='links' href='/emcartaz'> EM CARTAZ </a>
               <a className='links' href='/embreve'> EM BREVE </a>
               <a className='links' href='/snackbar'> SNACK BAR </a>
            </nav>
            <div className='botao-login'>
            <Link to='/login' className='salvar-botao'>LOGIN</Link>
            </div>
        </div>
        </section>
    );

}