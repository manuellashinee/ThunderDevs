import './index.scss';
import '../../../common/common.scss'
import Hora1 from '../hora1';
import { useEffect, useState } from 'react';
import { vizualizarThoras } from '../../../api/horaApi.js';
import { adddataFilmeEmSala, dataFilmeEmSala, horariosFilmeEmSala } from '../../../api/filmeHorario';
import { useParams } from 'react-router-dom';
import { marcado } from './services.js';


export default function Rolaa(props) {
    const [horas, setHoras] = useState([]);
    const [horasSelecionados, setHorasSelecionados] = useState([]);
    const [dataDe, setDataDe] = useState();
    const [dataAte, setDataAte] = useState();

    const { idParam } = useParams();

    async function carregarHoras() {
        const resp = await vizualizarThoras();
        setHoras(resp);

        const resp2 = await horariosFilmeEmSala(idParam, props.item.idSala);
        setHorasSelecionados(resp2);

        const resp3 = await dataFilmeEmSala(idParam, props.item.idSala);
        if (resp3[0] != null && resp3[0].de != null) {
            setDataDe(`${resp3[0].de.substr(0, 4)}-${resp3[0].de.substr(5, 2)}-${resp3[0].de.substr(8, 2)}`);
        }

        if (resp3[0] != null && resp3[0].ate != null) {
            setDataAte(`${resp3[0].ate.substr(0, 4)}-${resp3[0].ate.substr(5, 2)}-${resp3[0].ate.substr(8, 2)}`);
        }

    }

    function novosHorarios(hora) {
        let novasHoras = [...horasSelecionados];

        if (horasSelecionados.find(item => item.horario === hora))
            novasHoras.splice(novasHoras.findIndex(item => item.horario === hora), 1);
        else {
            novasHoras.push({ horario: hora});
        }

        console.log(novasHoras);
        setHorasSelecionados(novasHoras);
    }

    async function salvarDataFilme(){
        const resposta = await adddataFilmeEmSala(idParam, props.item.idSala, dataDe,dataAte);
        alert("filme foi");
    }




    useEffect(() => {
        carregarHoras();
    }, [props])

    return (
        <section className='rola-p'>
            <div className='data-sala'>
                <p className='sala-cor'>SALA <span>{props.item.Numero}</span></p>
                <p className='datas'>DATAS DISPONÍVEIS:</p>
            </div>

            <div className='texto-data'>
                <p>DE:</p>
                <input className='data-texto2' type='date' value={dataDe} onChange={e=> setDataDe(e.target.value)} />
            </div>
            <div className='texto-data'>
                <p>ATÉ:</p>
                <input className='data-texto2' type='date' value={dataAte} onChange={e=> setDataAte(e.target.value)} />
            </div>

            <p className='datas2'>HORÁRIOS:</p>
            <div className='data-p'>
                <div className='data-p2'>
                    {horas.map(item =>
                        <span onClick={() => novosHorarios(item.horario)}>
                            <Hora1 hora={item.horario} marcado={marcado(horasSelecionados, item.horario)} />
                        </span>
                    )}
                </div>
                <div className='espacamento'>
                    <p className='compra-botao' onClick={salvarDataFilme}>SALVAR</p>
                </div>
            </div>
            <hr className='linha' />
        </section>
    );
}