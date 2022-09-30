import './index.scss'
import '../../../common/common.scss'

export default function CabecalhoP(){
return(
  <section className='c-pesquisa'>
    <div className='cabecalho-pesquisa'>
            <div>
            <img className='logo' src='../images/logo.svg'/>
            </div>

            <div className='pesquisa-input'>
              <input className='pesquisa-design' type='text'/>
              <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
             </div>
          </div>
    </section>
);
}