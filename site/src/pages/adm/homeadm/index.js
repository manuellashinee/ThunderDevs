import './index.scss';
import '../../../common/common.scss'

export default function HomeAdm() {
    return(
        <section className='home-adm'>
            <div className='cabecalho-homeadm'>
                <img className='logo' src='../images/logo.svg'/>
                <div>
                    <img className='icon-persona' src='../images/popcorn.png'/>
                    <p className='texto-catalogo'>juliana</p>
                </div>
            </div>
        </section>
    );
}