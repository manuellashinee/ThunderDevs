import './index.scss'
import '../../../common/common.scss'
import { Link, useParams, useNavigate } from 'react-router-dom'
import CabecalhoP from '../../components/cabecalho-sem-p';
import Rodape from '../../components/rodape';
import { useEffect, useState } from 'react';
import { assentosEmIngresso, assentosSalas } from '../../../api/assentosApi.js';
import { buy } from './sevices.js';

export default function Assento(){
    const navigate = useNavigate();
    const [assentos,setAssentos] = useState([])
    const [jaComprados, setJaComprados]= useState([]);
    const [ assentosSelecionados, setAssentosSelecionados]= useState([])
    const {idParam} = useParams();
    
    async function selectAssentos(){
        const ass= await assentosSalas();
        const comprados = await assentosEmIngresso(idParam,"13:00",1)
        setAssentos(ass);
        setJaComprados(comprados);
    }

    function proxPag(){
        navigate(`/compra3/${idParam}`)
    }

    function assentosEscolhidos(idassetno){
        let novosAssentos = [...assentosSelecionados];

        if (assentosSelecionados.find(item => item === idassetno)){
            novosAssentos.splice(novosAssentos.findIndex(item => item === idassetno), 1);
        }
        else {
            novosAssentos.push(idassetno);
        }
        setAssentosSelecionados(novosAssentos);
        console.log(novosAssentos);
    }

    useEffect(() => {
        selectAssentos();
      }, [])

    return(
        <section className='assento-page'>
            <CabecalhoP/>
            <div className='seta-botao'>
                <Link to='/'><img className='flecha-c' src='../images/flecha.svg' /></Link>
                <p onClick={proxPag}className='botao-continuar'>CONTINUAR</p>
            </div>

            <div className='assentos-inicio'>

                <div className='assento-row'>
                    <div className='assento-baixo'>
                        <div className='assento-cima2'>
                            {assentos.map(item=>
                            item.assento === 15? 
                            <div>
                            <br/>
                            <span onClick={()=> assentosEscolhidos(item.idassento)}>
                                <p className={buy(jaComprados,assentosSelecionados,item.idassento)}>A</p>
                            </span>
                            </div>
                            :
                            <span onClick={()=> assentosEscolhidos(item.idassento)}>
                                <p className={buy(jaComprados,assentosSelecionados,item.idassento)}>A</p>
                            </span>
                            )}
                            
                         </div>
                        </div>
                </div>

                
                <div className='numeros'>
                    <p className='n'>1</p>
                    <p className='n'>2</p>
                    <p className='n'>3</p>
                    <p className='n'>4</p>
                    <p className='n'>5</p>
                    <p className='n'>6</p>
                    <p className='n'>7</p>
                    <p className='n'>8</p>
                    <p className='n'>9</p>
                    <p className='n'>10</p>
                    <p className='n'>11</p>
                    <p className='n'>12</p>
                    <p className='n'>13</p>
                    <p className='n'>14</p>
                    <p className='n'>15</p>
                    
                </div>
            </div>

            <div className='tela'>
               <p className='tela2'>TELA</p> 
            </div>
            <Rodape/>
        </section>
    );
}