import './index.scss';
import '../../../common/common.scss'
import Nomelinha from '../../components/cartaz-breve';
import CompraCima from '../../components/compra-cima';
import Rodape from '../../components/rodape';
import Data1 from '../../components/data1';
import Sala from '../../components/sala';
import Hora1 from '../../components/hora1';
import { useEffect, useState } from 'react';
import { prePedidoFilme } from '../../../api/filmeHorario.js';
import { useParams } from 'react-router-dom';

export default function Compra1(){
    const [atual, setAtual] = useState(true);
    const [textoDatas, setTextoDatas]= useState([]);
    const [filmeSalas, setFilmeSalas]= useState([]);
    const [data, setData]= useState();
    const [semana,setSemana]= useState([]);
    const {idParam} = useParams();

    

    function semanando(dataInicio,datafinal){
        let arrdates= [];
        
        let data = new Date(dataInicio); 
        let datafirst = new Date(dataInicio); 
        let datalast= new Date(datafinal);
        arrdates.push(datafirst)
        for(let i= 0; i<5; i++ ){
        let a= data.setDate(data.getDate() + 1);
        let b= Date.parse(datalast)
        if(a > b){
            i=5;
        }
        else
        arrdates.push(new Date(a))
        } 
        setSemana(arrdates);
    }
    
    function verData(datinha){

        let lanca= new Date(datinha);
        let agora = new Date();
        let x= agora.getTime();
        let mento = lanca.getTime();
        let ver= x-mento;

        console.log(ver)

        if(ver<0){
            setAtual(false)
        }
        else
            setAtual(true)
    
    }

    async function dats(){
        const x= await prePedidoFilme(idParam);
        const d= verData(x[0].de);
        setTextoDatas(x[0]);
        setFilmeSalas(x);
        console.log(atual)
        if(atual === true){
            setData(`DATAS`)
            const f= semanando(x[0].hoje,x[0].ate);
        }
        else{
        const f= semanando(x[0].de,x[0].ate);
        setData(`ESTREIA - ${x[0].de.substr(8,2)}/${x[0].de.substr(5,2)}/${x[0].de.substr(0,4)}`)
        }
    }


    useEffect(() => {
        dats();
      }, [atual])

    return(
        <section className='compra1'>
            
     <CompraCima/>

        <div className='parte-2'>
            <div className='textos-p2'>
                <p className='titulo1'>PREÇOS:</p>
                <p className='titulo2'>MEIA: <span className='preco'>21,00</span></p>
                <p className='titulo2'>INTEIRA: <span className='preco'>42,00</span></p>
            </div>

            <Nomelinha nome={data}/>
            <div className='data-p'>
                <div className='data-p2'>
                    {semana.map(item => 
                    <Data1 item={item}/>)}
                </div>
            </div>
            <div className='textos-p2'>
                <p className='titulo2'>SALAS:</p>
                <p className='preco'>O PREÇO PODE VARIAR DE ACORDO COM A SUA ESCOLHA.</p>
            </div>

            <div>
                <Sala numero='7'/>
                <div className='salas'>
                    <Hora1 hora='13:30'/>
                    <Hora1 hora='14:30'/>
                    <Hora1 hora='15:30'/>
                </div>
            </div>

            <div>
                <Sala numero='8'/>
                <div className='salas'>
                    <Hora1 hora='16:30'/>
                    <Hora1 hora='17:30'/>
                </div>
            </div>
        </div>
       <Rodape/>
        </section>
    );
}