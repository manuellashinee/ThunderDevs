import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import FilmeCards from '../../components/filmeCards/index';
import CabecalhoP from '../../components/cabecalho-pesquisa';
import { useEffect, useState } from 'react';
import { vizualizarTFilmes } from '../../../api/filmeapi';

export default function Filmes(){
    const [filmes, setFilmes] = useState([])

    async function carregarFilmes(){
        const resp = await vizualizarTFilmes();
        console.log(resp);
        setFilmes(resp);
    }
     
    useEffect(() => {
        carregarFilmes();
    }, [])

    return(
        <section className='salvos'>
    <div className='head'>
        <CabecalhoP/>
     </div>
     <div>
        <h1>FILMES CADASTRADOS:</h1>
     </div>

     <div className='setas-circle'>

        <div>
            <img src='../images/Arrow 1.svg'/>
        </div>

        <div>
            <img src='../images/circle-mais.svg'/>
        </div>

     </div>
        {filmes.map(item =>
        <FilmeCards  item= {item}/>
        )}
        </section>
    );
}
