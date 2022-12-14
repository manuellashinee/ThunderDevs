import { useState, useEffect } from 'react'
import Storage, { use } from 'local-storage'
import './index.scss'
import { salvarNovoPedido } from '../../../api/pedidoAPI.js';
import { useNavigate, useParams } from 'react-router-dom'
import { buscarPorId } from '../../../api/comboapi';
import { alterarStatusPedido } from '../../../api/pedidoAPI.js';
import {  toast } from 'react-toastify';


export default function CartaoCredito(props) {
    const [nome, setNome] = useState ('');
    const [vencimento, setVencimento] = useState ('');
    const [numero, setNumero] = useState ('');
    const [cvv, setCvv] = useState ('');
    const [bandeira, setBandeira] = useState ('');
    const [formaPagamento, setFormaPagamento] = useState ('');
    const [total, setTotal] = useState ();
    const {idParamCombo} = useParams();
    const [combo, setCombo] = useState([])
    const navigate = useNavigate();

    async function carregarCombo(){
        const resp= await buscarPorId(idParamCombo)
        setCombo(resp);

        calcularTotal(resp)
    }



    async function salvarPedido(){
        try{


            if (!numero) throw new Error('O campo NÚMERO é obrigatório.');
            if (!cvv) throw new Error('O campo CVV é obrigatório.');
            if (!nome) throw new Error('O campo NOME é obrigatório.');
            if (!bandeira) throw new Error('O campo BANDEIRA é obrigatório.');
            if (!formaPagamento) throw new Error('O campo FORMA DE PAGAMENTO é obrigatório.');
            if (!vencimento) throw new Error('O campo VENCIMENTO é obrigatório.');

            let id = Storage('usuario-logado').id;
    
            let pedido= 
            {
                idcombo: idParamCombo,
                pagamento : 
                {
                nome :  nome,
                vencimento : vencimento,
                numero : numero,
                cvv : cvv,
                bandeira : bandeira,
                formaPagamento : formaPagamento
                },
                total: total
            }
    
            const r = await salvarNovoPedido(id, pedido);
            toast.success('Pedido do combo realizado!');
            Storage('combospedidos', []);
            navigate('/');

        }
        catch (err) {
            toast.error(err);
        }


    }


    function calcularTotal(combo){
        let total = Number(combo.preco) + 5.00;
        setTotal(Number(total));
        console.log(combo)
    }

    useEffect(() => {
        carregarCombo()
    }, [idParamCombo])

    return(

        <section className='cartao-credito3'>
              
            

            <p><span>{}</span></p>
            <p></p>
         
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
                                <option selected hidden> Selecione</option>
                                <option value={"elo"}>ELO</option>
                                <option value={"mastercard"}>Mastercard</option>
                                <option value={"visa"}>Visa</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='cartao2'>
                    <div className='campo2'>
                            <p className='texto-pagar'>VALOR:<span className='cartao-texto'>{combo.preco}</span></p>
                            <p className='texto-pagar'>TAXA:<span className='cartao-texto'>R$ 05,00</span></p>
                    </div>
                    <hr/>
                    <div className='texto-centro'>
                    <p className='texto-pagar'>TOTAL:<span className='cartao-texto'>{total},00</span></p>
                    </div>
                </div>

                <div className='certinho'>
               <p className='botao-continuar' onClick={salvarPedido}>FINALIZAR</p>
               
               </div>
            </div>

        </section>
    )
}