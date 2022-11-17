import './index.scss'

import CartaoCredito from '../../components/cartaoCredito';
import CompraCombo from '../../components/compraCombo';
import { useState, useEffect } from 'react';
import { buscarPorId } from '../../../api/comboapi.js';
import { useParams } from 'react-router-dom';

export default function PagamentoCombo() {
    const [combo, setCombo] = useState([]);
    const {idParamCombo} = useParams();
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    
    async function carregarCombo(){
        const resp= await buscarPorId(idParamCombo)
        setNome(resp.nome);
        setDescricao(resp.descricao);
    }

    useEffect(() => {
        carregarCombo();
    
      }, [])

    return(
        <section className='pagamento-combo'>
            <CompraCombo/>
        <div className='ajustes'>
            <div className='little-space'>
            <div className='spacezinho'><p className='nome-combo'>NOME DO COMBO:<span className='teco'>{nome}</span></p></div>
            <div><p className='descricao-combo'>DESCRIÇÃO DO COMBO:<span  className='teco'>{descricao}</span></p></div>
            </div>
        </div>

            <CartaoCredito/>


        </section>

       


    )
}