import './index.scss'
import Storage from "local-storage"
import '../../../common/common.scss'
import { useState } from 'react'

export default function Hora3(props){
    
    function marcadin(hora,sala) {
        if(Storage("ingresso")[1]){
            
        console.log(Storage("ingresso")[1].horario)
        console.log(hora)

        if (Storage("ingresso")[1].horario === hora && Storage("ingresso")[1].sala === sala )
            return 'horario-marcado';
        else
            return '';
        }
    }


    return (
        <section className='data-inicial2'>
            <p className={`data-p2 ${marcadin(props.item.HORARIO,props.item.SALA)}`}>{props.item.HORARIO}</p>
        </section>
    );
}