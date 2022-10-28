import './index.scss';
import '../../../common/common.scss'
import Hora1 from '../hora1';
import { useEffect, useState } from 'react';
import { vizualizarThoras } from '../../../api/horaApi.js';
import { horariosFilmeEmSala } from '../../../api/filmeHorario';
import { useParams } from 'react-router-dom';

export default function Rolaa(props){
        const [horas,setHoras]= useState([]);
        const [horasSelecionados,setHorasSelecionados]= useState([]);

        const { idParam } = useParams();

        async function carregarHoras(){
            const resp = await vizualizarThoras();
            setHoras(resp);

            const resp2 = await horariosFilmeEmSala(idParam, props.item.idSala);
            console.log(resp2);
            setHorasSelecionados(resp2);
        }

        function marcado(horario) {
            if (horasSelecionados.find(item => item.ds_horario === horario))
                return true;
            else
                return false;
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
                    <Hora1 hora={item.horario} marcado={marcado(item.horario)}/>
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