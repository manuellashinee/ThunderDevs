import './index.scss';
import '../../../common/common.scss'
import Cabe2 from  '../../components/cabecalho2/index'
import Nomelinha from '../../components/cartaz-breve';
import FilmeC from '../../components/filmesc';
import { consultaFilmeCartaz } from '../../../api/filmeapi';
import { useEffect, useState } from 'react';

export default function EmCartaz(){
  
const [filme, setFilmes]= useState([]);

  async function EmCartaz() {
    const resp = await consultaFilmeCartaz();
    console.log(resp);
    setFilmes(resp);
  }

  useEffect(() => {
    EmCartaz();
  }, [])
  
    return(
        <section className='em-cartaz'>
          <Cabe2/>
          <Nomelinha nome='EM CARTAZ'/>
          <div className='bordas'>
          <div className='cards-filmes'>
          {filme.map(item=> 
             <FilmeC item= {item}/>
          )}
          </div>
          </div>
           
        </section>
    );
}