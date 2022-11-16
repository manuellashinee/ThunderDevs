import './index.scss';
import '../../../common/common.scss'
import CompraCima from '../../components/compra-cima';
import Rodape from '../../components/rodape';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Storage from 'local-storage';
import { salvarNovoPedidoFilme } from '../../../api/pedidoFilmeApi';

export default function Compra4(){
    const [nome, setNome] = useState ('');
    const [vencimento, setVencimento] = useState ('');
    const [numero, setNumero] = useState ('');
    const [cvv, setCvv] = useState ('');
    const [bandeira, setBandeira] = useState ('');
    const [formaPagamento, setFormaPagamento] = useState ('');
    const {idParam} = useParams();
    const navigate = useNavigate();


    async function salvarPedido(){
        try{

            if (!numero) throw new Error('O campo NÚMERO é obrigatório.');
            if (!cvv) throw new Error('O campo CVV é obrigatório.');
            if (!nome) throw new Error('O campo NOME é obrigatório.');
            if (!bandeira) throw new Error('O campo BANDEIRA é obrigatório.');
            if (!formaPagamento) throw new Error('O campo FORMA DE PAGAMENTO é obrigatório.');
            if (!vencimento) throw new Error('O campo VENCIMENTO é obrigatório.');

            let id = Storage('usuario-logado').id;

            let sentadorios= []
            for(let i= 0 ; i<Storage('ingresso')[2].assentos.length;i++){
                sentadorios.push(Storage('ingresso')[2].assentos[i].idassento)
            }

            let pedido= 
            {
                    idusuario:id,
                    inteiras:Storage('ingresso')[3].inteiras,
                    meias:Storage('ingresso')[3].meias,
                    total:Storage('ingresso')[3].total,
                    pagamento : 
                    {
                    nome :  nome ,
                    vencimento : vencimento ,
                    numero : numero,
                    cvv : cvv,
                    bandeira : bandeira,
                    formaPagamento : formaPagamento
                    },
                    dataFilme:Storage('ingresso')[0],
                    horario:Storage('ingresso')[1].horario,
                    sala:Storage('ingresso')[1].sala,
                    assentos:sentadorios
            }
    
            const r = await salvarNovoPedidoFilme(idParam, pedido);
            alert('O pedido foi!');
            Storage('ingresso', []);
            navigate('/');

        }
        catch (err) {
            alert(err);
        }


    }


    return(
        <section className='compra4-page'>
            <CompraCima/>

            <div className='textos-column'>
                    <h1 className='pagamento'>PAGAMENTO:</h1>
                    <p className='pagamento2'>INFELIZMENTE SÓ ESTAMOS TRABALHANDO COM CARTÃO NO MOMENTO</p>
                </div>

            <div className='parte-2'>
                <div className='cartao1'>
                    <p className='cartao-texto'>CARTÃO DE CRÉDITO</p>
                    <hr/>
                    <div className='campos-cartao'>
                        <div className='campo1'>
                            <p className='texto-pagar'>NÚMERO DO CARTÃO</p>
                            <input className='input-pagar' type='number' value={numero} onChange={e => setNumero(e.target.value)}/>
                            <p className='texto-pagar'>NOME DO CARTÃO</p>
                            <input  className='input-pagar' type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                            <p className='texto-pagar'>FORMA DE PAGAMENTO</p>
                            <select className='input-pagar' value={formaPagamento}  onChange={e => setFormaPagamento(e.target.value)}>
                                <option selected hidden> Selecione </option>
                                <option>CRÉDITO</option>
                                <option>DÉBITO</option>
                            </select>
                        </div>
                        <div className='campo1'>
                            <p className='texto-pagar'>NM/AA</p>
                            <input  className='input-pagar' type='date' value={vencimento} onChange={e => setVencimento(e.target.value)}/>
                            <p className='texto-pagar'>CVV</p>
                            <input  className='input-pagar' type='text' value={cvv} onChange={e => setCvv(e.target.value)}/>
                           
                            <p className='texto-pagar'>BANDEIRA</p>
                           <select className='input-pagar' value={bandeira}  onChange={e => setBandeira(e.target.value)}>
                                <option  selected hidden> Selecione</option>
                                <option value={"elo"}>ELO</option>
                                <option value={"mastercard"}>Mastercard</option>
                                <option value={"visa"}>Visa</option>
                            </select>
                            <div className='imagens'>
                                <img className='img-c' src='../images/Visa.svg'/>
                                <img className='img-c' src='../images/master.svg'/>
                                <img className='img-c' src='../images/elo.svg'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cartao2'>
                    <hr/>
                    <div className='texto-centro'>
                    <p className='texto-pagar'>TOTAL:<span className='cartao-texto'>R$ {Storage('ingresso')[3].total},00</span></p>
                    </div>
                </div>

                <div className='certinho'>
               <p className='botao-continuar' onClick={salvarPedido}>FINALIZAR</p>
               
               </div>
            </div>

            <Rodape/>
        </section>
    );
}