import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom'
import CabecalhoP from '../../components/cabecalho-sem-p';

export default function Assento(){
    return(
        <section className='assento-page'>
            <CabecalhoP/>
            <div className='seta-botao'>
                <Link to='/'><img className='flecha-c' src='../images/flecha.svg' /></Link>
                <p className='botao-continuar'>CONTINUAR</p>
            </div>
        </section>
    );
}