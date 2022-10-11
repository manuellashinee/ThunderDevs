import './index.scss';
import '../../../common/common.scss'

export default function Compra1(){
    return(
        <section className='compra1'>
            <div className='parte-1'>
            <div className='head'>
            <div className='cabecalho-pesquisa'>
                <div>
                    <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='foto'>
    
                 <div className='pesquisa-input'>
                    <input className='pesquisa-design' type='text'/>
                    <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
                 </div>
    
                   <div className='foto-perfil'>
                   <div><img  className='perfil' src='../images/elizinha.svg'/></div>
                   <div><p>Manu</p></div>
                   </div>
                    
                </div>
                  
                  
            </div>
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