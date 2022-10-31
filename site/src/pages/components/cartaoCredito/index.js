import { useState, useEffect } from 'react'
import Storage, { use } from 'local-storage'
import './index.scss'
import { salvarNovoPedido } from '../../../api/pedidoAPI.js';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom'

export default function CartaoCredito(props) {

    const [nome, setNome] = useState ('');
    const [vencimento, setVencimento] = useState ('');
    const [numero, setNumero] = useState ('');
    const [cvv, setCvv] = useState ('');
    const [bandeira, setBandeira] = useState ('');
    const [formaPagamento, setFormaPagamento] = useState ('');
    const [total, setTotal] = useState ('');
    const {idParamCombo} = useParams();
    

    const navigate = useNavigate();

    async function salvarPedido(){

        try{
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
            alert('O pedido foi!');
            Storage('combospedidos', []);
            navigate('/');

        }
        catch (err) {
            alert(err);
        }


    }

    function calcularTotal(idcombo){
        let total = {idcombo}.preco + 5.00;
        setTotal(total)
    }

    useEffect(() => {
        calcularTotal(idParamCombo)
    }, [])

    return(

        <section className='cartao-credito3'>

            <p>NOME: <span></span></p>
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
                                <option disabled selected hidden> Selecione </option>
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
                                <option disabled selected hidden> Selecione</option>
                                <option value={"elo"}>ELO</option>
                                <option value={"mastercard"}>Mastercard</option>
                                <option value={"visa"}>Visa</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='cartao2'>
                    <div className='campo2'>
                            <p className='texto-pagar'>VALOR:<span className='cartao-texto'>{}</span></p>
                            <p className='texto-pagar'>TAXA:<span className='cartao-texto'>R$ 05,00</span></p>
                    </div>
                    <hr/>
                    <div className='texto-centro'>
                    <p className='texto-pagar'>TOTAL:<span className='cartao-texto'>{calcularTotal}</span></p>
                    </div>
                </div>

                <div className='certinho'>
               <p className='botao-continuar' onClick={salvarPedido}>FINALIZAR</p>
               
               </div>
            </div>

        </section>
    )
}