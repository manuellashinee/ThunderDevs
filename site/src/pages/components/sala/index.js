import './index.scss'
import Hora3 from '../../components/Hora3';
import '../../../common/common.scss'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { prePedidoFilmeHoras } from '../../../api/filmeHorario.js';
import { ToastContainer, toast } from 'react-toastify';
import Storage from 'local-storage';

export default function Sala(props){
    const [filmeHoras, setFilmeHoras]= useState([]);
    const {idParam} = useParams();
    const [ horapura, setHorapura] = useState([]);

    function marcadin(horasTotais,hora) {
        if (horasTotais.find(item => item=> item.horario === hora))
            return true;
        else
            return false;
    }
    
    
    async function pegarHoras(){
        const f= await prePedidoFilmeHoras(idParam,props.item.sala);
        setFilmeHoras(f);
    }

    
    function adicionarHrSlIngresso(sala,hora){
        let ingresso = []
        let HoraMarcada= [];

        if(Storage('ingresso') ){
            ingresso = Storage('ingresso')
        }
        if(ingresso[0]){
        if(ingresso[1]){
            ingresso.splice(1,1)
            HoraMarcada.splice(HoraMarcada.findIndex(item => item === hora), 1)
        }
        if(!ingresso.find(item=> item.sala === sala)){
            ingresso.push({sala:sala,horario:hora})
            HoraMarcada.push(hora)
        }

        
        Storage('ingresso', ingresso);
        setHorapura(HoraMarcada);
        }
        else{
            toast('Selecione a data primeiro')
        }
        
    }

    
    useEffect(() => {
        pegarHoras();
      }, [props])

    return (
        <section className='Sala-p'>
            
            <ToastContainer />
            <p className='Sala1'>SALA {props.item.sala}</p>
            <div className='salas'>
                   { filmeHoras.map(item => 
                   <span onClick={e=>adicionarHrSlIngresso(props.item.sala,item.HORARIO)}>
                   <Hora3 item={item} marcado={marcadin(horapura,horapura[0])} />
                   </span>)}
            </div>
        </section>
    );
}