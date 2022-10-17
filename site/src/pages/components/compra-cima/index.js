import './index.scss';
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

export default function CompraCima(){
    return(
        <section className='compra1'>
            <div className='parte-1'>
            <div className='head'>
            <div className='cabecalho-pesquisa'>
                <div>
                    <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='foto'>
                   <div className='foto-perfil'>
                   <div><img  className='perfil' src='../images/elizinha.svg'/></div>
                   <div><p>Manu</p></div>
                   </div>
                </div>
                  
                  
            </div>
            <Link to='/'><img className='flecha-c' src='../images/flecha.svg' /></Link>
            <div className='textos-cimabaixo'>
                <p className='titulo'>AVATAR 2</p>
                <div className='sub-textos'>
                    <p className='categoria1'>12</p>
                    <p className='categoria2'>180 min</p>
                    <p className='categoria2'>AVENTURA</p>
                </div>
            </div>
        </div>
        </div>
        </section>

    );
}