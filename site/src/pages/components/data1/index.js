import './index.scss'
import '../../../common/common.scss'
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { datam } from './service.js';

export default function Data1(props){
    const [dataform,setDataForm] = useState("")
    const [marca, setMarca] = useState(false)
    const [datapaPura, setDatapaPura] = useState([])

    function tenis(){
        let dataFormatada = (props.item.getFullYear() + "-" + ((props.item.getMonth() + 1)) + "-" + (props.item.getDate() )) 
        setDataForm(dataFormatada);
        console.log(props.item);
        
        let dataMarcada= [];
        dataMarcada.push(Storage('ingresso')[Storage('ingresso').findIndex(item => item.data === item.data)].data)
        setDatapaPura(dataMarcada)
    }

    function adicionarDataIngresso(data){
        let ingresso = []
        let dataMarcada= [];

        if(Storage('ingresso')){
            ingresso = Storage('ingresso')
        }
        if(ingresso[0]){
            ingresso.splice(ingresso.findIndex(item => item.data === item.data), 1)
            dataMarcada.splice(dataMarcada.findIndex(item => item === data), 1)
        }
        if(!ingresso.find(item=> item.data === data)){
            ingresso.push({data:data})
            dataMarcada.push(data)
        }
        
        Storage('ingresso', ingresso);
        setDatapaPura(dataMarcada);
        console.log(dataMarcada);
    }

    useEffect(() => {
        tenis();
      }, [props])
    return (
        <section className='data-inicial'>
            <p onClick={()=> adicionarDataIngresso(dataform)} className={datam(props.item,datapaPura)}>{dataform.substr(8,2)}/{dataform.substr(5,2)}</p>
        </section>
    );
}