import './index.scss';
import '../../../common/common.scss'
import Hora1 from '../hora1';
import { useEffect, useState } from 'react';
import { vizualizarThoras } from '../../../api/horaApi.js';

export default function Rolaa(props){
        const [horas,setHoras]= useState([]);

        async function carregarHoras(){
            const resp = await vizualizarThoras();
            
            setHoras(resp);
        }
    
        useEffect(() => {
            carregarHoras();
        }, [])


    return(
        <section className='rola-p'>
            <div className='data-sala'>
                <p className='sala-cor'>SALA <span>{props.item.Numero}</span></p>
                <p className='datas'>DATAS DISPONÍVEIS:</p>
            </div>

            <div className='texto-data'>
                <p>DE:</p>
                <input className='data-texto2' type='date'/>
            </div>
            <div className='texto-data'>
                <p>ATÉ:</p>
                <input className='data-texto2' type='date'/>
            </div>

                <p className='datas2'>HORÁRIOS:</p>
                <div className='data-p'>
                <div className='data-p2'>
                    {horas.map(item=>
                    <Hora1 hora={item.horario}/>
                    )}
                </div>
                <div className='espacamento'>
                <p className='compra-botao'>SALVAR</p>
                </div>
            </div>
            <hr className='linha'/>
        </section>
    );
}