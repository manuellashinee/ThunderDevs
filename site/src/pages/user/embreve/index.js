import './index.scss';
import '../../../common/common.scss'
import Cabe2 from  '../../components/cabecalho2/index'
import Nomelinha from '../../components/cartaz-breve';
import FilmeC from '../../components/filmesc';
import { useEffect, useState } from 'react';
import { consultaFilmeBreve } from '../../../api/filmeapi.js';

export default function EmBreve(){
    const [filme, setFilmes]= useState([]);

    async function emBreve() {
        const resp = await consultaFilmeBreve();
        console.log(resp);
        setFilmes(resp);
      }

      useEffect(() => {
        emBreve();
      }, [])

    return(
        <section className='em-breve'>
           <Cabe2/>
           <Nomelinha nome='EM BREVE'/>
           <div className='cards-filmes'>
             {filme.map(item=> 
             <FilmeC item= {item}/>
          )}</div>
        </section>
    );
}