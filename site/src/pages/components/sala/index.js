import './index.scss'
import Hora2 from '../../components/hora2';
import '../../../common/common.scss'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { prePedidoFilmeHoras } from '../../../api/filmeHorario.js';

export default function Sala(props){
    const [filmeHoras, setFilmeHoras]= useState([]);
    const {idParam} = useParams();
    
    async function pegarHoras(){
        const f= await prePedidoFilmeHoras(idParam,props.item.sala);
        setFilmeHoras(f);
        console.log(f);
    }

    
    useEffect(() => {
        pegarHoras();
      }, [props])

    return (
        <section className='Sala-p'>
            <p className='Sala1'>SALA {props.item.sala}</p>
            <div className='salas'>
                   { filmeHoras.map(item => 
                   <Hora2 item={item} />)}
            </div>
        </section>
    );
}