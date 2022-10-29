import './index.scss';
import '../../../common/common.scss'
import Hora1 from '../hora1';
import { useEffect, useState } from 'react';
import { vizualizarThoras } from '../../../api/horaApi.js';
import { dataFilmeEmSala, horariosFilmeEmSala } from '../../../api/filmeHorario';
import { useParams } from 'react-router-dom';
import { marcado } from './services.js';

export default function Rolaa(props){
        const [horas,setHoras]= useState([]);
        const [horasSelecionados,setHorasSelecionados]= useState([]);
        const [dataDe, setDataDe]= useState();
        const [dataAte, setDataAte]= useState();

        const { idParam } = useParams();

        async function carregarHoras(){
            const resp = await vizualizarThoras();
            setHoras(resp);
            const resp2 = await horariosFilmeEmSala(idParam, props.item.idSala);
            setHorasSelecionados(resp2);
            const resp3= await dataFilmeEmSala(idParam,props.item.idSala);
            setDataDe(`${resp3[props.item.idSala-1].de.substr(0,4)}-${resp3[0].de.substr(5,2)}-${resp3[0].de.substr(8,2)}`);
            setDataAte(`${resp3[props.item.idSala-1].ate.substr(0,4)}-${resp3[0].ate.substr(5,2)}-${resp3[0].ate.substr(8,2)}`);
            console.log(props.item.idSala-1);
            
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
                <input className='data-texto2'  type='date' value={dataDe}/>
            </div>
            <div className='texto-data'>
                <p>ATÉ:</p>
                <input className='data-texto2' type='date'  value={dataAte}/>
            </div>

                <p className='datas2'>HORÁRIOS:</p>
                <div className='data-p'>
                <div className='data-p2'>
                    {horas.map(item=>
                    <Hora1 hora={item.horario} marcado={marcado(horasSelecionados,item.horario)}/>
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