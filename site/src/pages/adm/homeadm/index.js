import './index.scss';
import '../../../common/common.scss'

export default function HomeAdm() {
    return(
        <section className='home-adm'>
            <div className='parte-cima'>
                <div className='cabecalho-homeadm'>
                <img className='logo' src='../images/logo.svg'/>
                <div className='icon-texto'>
                    <img className='icon-persona' src='../images/popcorn.png'/>
                    <p className='texto-catalogo'>juliana</p>
                </div>
                </div>
                <div className='tt-adm'>
                    <h1 className='titulo-adm'>BEM VINDO, <span className='cor-texto'>ADMISTRADOR(A)!</span></h1>
                    <p className='sub-titu'>DESEJAMOS AS BOAS VINDAS AO SISTEMA <span className='sub-titu-s'>POPCORN TIME</span></p>
                </div>
            </div>
        </section>
    );
}