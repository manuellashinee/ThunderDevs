import './index.scss'
import '../../common/common.scss'
import Cabecalhoo from '../../componentes/cabecalho';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <section className='landing-page'>

        <div className='cabecalho'>
                <div className='img-logo'>
                <img className='logo' src='../images/logo.svg'/>
                </div>
            <nav >
               <a className='links' href='#INICIO'> INICIO </a>
               <a className='links' href='# EM CARTAZ'> EM CARTAZ </a>
               <a className='links' href='#EM BREVE'> EM BREVE </a>
               <a className='links' href='#SNACK BAR'> SNACK BAR </a>
            </nav>
            <div className='botao-login'>
            <Link to='/login' className='salvar-botao'>LOGIN</Link>
            </div>
        </div>

            <div className='resumo-l'>
                <hr/>
                <p className='texto1-l'>Viva a melhor experiência em assistir um filme em São Paulo. POPCORN TIME é a maior rede de cinemas multiplex do Brasil.</p>
                <Cabecalhoo/>
                <hr/>
            </div>
        </section>
    );
}