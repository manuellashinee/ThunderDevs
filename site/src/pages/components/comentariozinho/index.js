import './index.scss'
import { Link } from 'react-router-dom';

export default function Comentaras(props) {


    return(
        <section className='comentariozinho'>
            <div className='parte-1'>
            <div className='head'>
            <div className='cabecalho-pesquisa'>
                <div>
                    <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='fotozinha'>
                   <div className='foto-perfil'>
                   <div><img  className='perfil' src='../images/elizinha.svg'/></div>
                   <div><p>Manu</p></div>
                   </div>
                </div>
                  
                  
            </div>
            <Link to='/'><img className='flecha-c' src='../images/flecha.svg' /></Link>
            <div className='textos-row'>
                <div>
                <h1 className='pagamento'>COMENTÁRIOS:</h1>
                </div>
                <div className='pagamento2'>
                <p>{props.nome}</p>
                </div>

                </div>
        </div>
        </div>
        
        </section>

    )
}