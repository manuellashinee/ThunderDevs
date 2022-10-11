import './index.scss';
import '../../../common/common.scss'
import Cabe2 from  '../../components/cabecalho2/index'
import ArdSnack from '../../components/card-snack';
import { vizualizarTCombos } from '../../../api/comboapi.js';
import { useEffect, useState } from 'react';
import Cards from '../../components/cabecalho';

export default function SnackBar(){
  const [combos, setCombos] = useState([]);

  async function carregarCombos(){
    const resp = await vizualizarTCombos();
    setCombos(resp);
  }

  useEffect(() => {
      carregarCombos();
  }, [])

    return(
        <section className='snackbar'>
          <div className='parte-1snack'>
           <Cabe2/>
           <p className='nome-titulo'>SNACK BAR</p>
          </div>
          <div className='parte-2snack'>
            <p className='combo-nome'>COMBOS:</p>
          </div>
          <div className='card-snack'>
            {combos.map(item=>
            <ArdSnack item = {item}/>
            )}
          </div>

        </section>
    );
}