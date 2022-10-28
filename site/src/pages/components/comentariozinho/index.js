import './index.scss'
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useEffect, useState } from 'react';

export default function Comentaras(props) {
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
          const usuarioLogado = storage('usuario-logado');
          setUsuario(usuarioLogado.nome);
    }, [])

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
                   <div  className='perfil'>{usuario.substr(0,1)}</div>
                   <div><p>{usuario}</p></div>
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