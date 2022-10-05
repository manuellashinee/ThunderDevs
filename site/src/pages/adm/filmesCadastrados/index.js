import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import FilmeCards from '../../components/filmeCards/index';
import { useEffect, useState } from 'react';
import { vizualizarTFilmes, FiltrarFilmeNome } from '../../../api/filmeapi';

export default function Filmes(){
    const [filmes, setFilmes] = useState([])
    const [nomefilme, setNomeFilme] = useState (""); 

   

    async function carregarFilmes(){
        const resp = await vizualizarTFilmes();
        
        setFilmes(resp);
    }

    async function flitrar(){
        const fil= await FiltrarFilmeNome(nomefilme)
        setFilmes(fil);
    }

    useEffect(() => {
        flitrar();
    }, [nomefilme])
     
    useEffect(() => {
        carregarFilmes();
    }, [])

    return(
        <section className='aa'>
    <section className='salvos'>
            
        <div className='head'>
        <div className='cabecalho-pesquisa'>
                <div>
                <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='pesquisa-input'>
                <input className='pesquisa-design' type='text' value={nomefilme} onChange={e=> setNomeFilme(e.target.value)}  />
                <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
                </div>
              
            </div>
        </div>
        <div className='a'>
            <h1>FILMES CADASTRADOS:</h1>
        </div>

        <div className='setas-circle'>

            <div>
               <Link to='/homeadm'><img className='voltar'  src='../images/Arrow 1.svg'/></Link>
            </div>

            <div>
                <Link to='/cadastrarfilme'><img className='voltar' src='../images/circle-mais.svg'/></Link>
            </div>

        </div>
            {filmes.map(item =>
            <FilmeCards  item= {item}/>
            )}
        </section>
        </section>
    );
}
