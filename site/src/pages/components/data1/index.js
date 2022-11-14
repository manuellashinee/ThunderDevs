import './index.scss'
import '../../../common/common.scss'
import { useEffect, useState } from 'react';

export default function Data1(props){
    const [dataform,setDataForm] = useState("")

    function tenis(){
        let dataFormatada = (props.item.getFullYear() + "-" + ((props.item.getMonth() + 1)) + "-" + (props.item.getDate() )) 
        setDataForm(dataFormatada);
    }

    useEffect(() => {
        tenis();
      }, [props])
    return (
        <section className='data-inicial'>
            <p className='data-p'>{dataform.substr(8,2)}/{dataform.substr(5,2)}</p>
        </section>
    );
}