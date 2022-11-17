import './index.scss';
import '../../../common/common.scss'
import CompraCima from '../../components/compra-cima';
import AssentoS from '../../components/assento-s';
import Rodape from '../../components/rodape';
import Sessao2 from '../../components/horario2';
import { Link, useNavigate,useParams } from 'react-router-dom';
import Storage from "local-storage";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Compra3(){    
    const navigate = useNavigate();
    const {idParam}= useParams();
    const [assesto,setAssesto] = useState(Storage('ingresso')[2].assentos)
    const [inteiras,setInteiras] = useState(0)
    const [meias,setMeias] = useState(0)
    const [total,setTotal] = useState()
    const [ dadostotais, setDadosTotais] = useState([...Storage('ingresso')])

    function calcTotal(){
        let x= (inteiras*42.00)+(meias*21.00) 
       
        setTotal(x);
    }

    function proxPag(){
        if(Number(meias)+Number(inteiras) != Storage('ingresso')[2].assentos.length){
            toast.error('Os ingressos comprados devem ser iguais a quantidade de assentos')
        }else{
            if(Storage('ingresso')[3]){
                dadostotais.splice(3,1)
            }
        dadostotais.push(
            {inteiras:inteiras,
            meias:meias,
            total:total})
        Storage('ingresso',dadostotais);
        navigate(`/compra4/${idParam}`);
        }
    }

    useEffect(()=>{
        calcTotal();
    },[meias,inteiras])

    useEffect(()=>{
        if(Storage('ingresso')[3]){
            setInteiras(Storage('ingresso')[3].inteiras)
            setMeias(Storage('ingresso')[3].meias)
            setTotal(Storage('ingresso')[3].total)
        }
    },[])

    return(
        <section className='compra3-principal'>
            <CompraCima/>
            <div className='assentos'>
            <p className='titulo1'>ASSENTOS:</p>
            {assesto.map(item=>
            <AssentoS assento={item.fileira + item.assento}/>)}
            </div>
            <Sessao2 horario={Storage('ingresso')[1].horario}/>
            <div className='parte-2'>
                <p className='preco'>SELECIONE O TIPO DE INGRESSO:</p>
                <div className='input-textop'>
                    <div className='input-texto2'>
                        <div className='input-textop'>
                            <p className='titulo2'>INTEIRA</p>
                            <p className='titulo3'>R$ 42,00</p>
                        </div>
                        <div>
                        <input className='input-ingresso' type='number' value={inteiras} onChange={e=>setInteiras(e.target.value)}/>
                        </div>
                    </div>
                    <div className='input-texto2'>
                        <div className='input-textop'>
                            <p className='titulo2'>MEIA</p>
                            <p className='titulo3'>R$ 21,00</p>
                        </div> 
                        <div>
                        <input className='input-ingresso' type='number' value={meias} onChange={e=>setMeias(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className='total-botao'>
                    <p className='titulo2'>TOTAL: <span className='valor-total'>R$ {total},00</span></p>
                    <div className='botao-prosseguir'>
                       <p onClick={proxPag} className='botao-ir'>PROSSEGUIR</p> 
                    </div>
                </div>
            </div>
            <Rodape/>
        </section>
    );
}