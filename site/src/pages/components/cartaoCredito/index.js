import { useState, useEffect } from 'react'
import Storage, { use } from 'local-storage'
import './index.scss'
import { salvarNovoPedido } from '../../../api/pedidoAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function CartaoCredito() {

    const [nome, setNome] = useState ('');
    const [vencimento, setVencimento] = useState ('');
    const [numero, setNumero] = useState ('');
    const [cvv, setCvv] = useState ('');
    const [bandeira, setBandeira] = useState ('');
    const [formaPagamento, setFormaPagamento] = useState ('');
    const [total, setTotal] = useState ('');

    const navigate = useNavigate();

    async function salvarPedido(){

        try{

            let combo = Storage('combospedidos')
            let id = Storage('cliente-logado').id;
    
            let pedido= 
            {
                idcombo: combo,
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
              toast.dark('O pedido foi!');
              Storage('combospedidos', []);
              navigate('/');

        }
        catch (err) {
            toast.error(err.response.data.erro);
        }


    }

    function calcularTotal(idcombo){
        let total = idcombo.preco + 5.00;
        setTotal(total)
    }

    useEffect(() => {
    }, [])

    return(

        <section className='cartao-credito3'>

            

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
                            
                        </div>
                        <div className='campo1'>
                            <p className='texto-pagar'>NM/AA</p>
                            <input  className='input-pagar' type='number' value={vencimento} onChange={e => setVencimento(e.target.value)}/>
                            <p className='texto-pagar'>CVV</p>
                            <input  className='input-pagar' type='text' value={cvv} onChange={e => setCvv(e.target.value)}/>

                            <select className='imagens' value={bandeira}  onChange={e => setBandeira(e.target.value)}>
                                <option><img className='img-c' src='../images/Visa.svg'/></option>
                                <option><img className='img-c' src='../images/master.svg'/></option>
                                <option><img className='img-c' src='../images/elo.svg'/></option>
                            </select>

                            <p>FORMA DE pagamento</p>
                            <select className='imagens' value={formaPagamento}  onChange={e => setFormaPagamento(e.target.value)}>
                                <option><p>CREDITO</p></option>
                                <option><p>DÉBITO</p></option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='cartao2'>
                    <div className='campo2'>
                            <p className='texto-pagar'>VALOR:<span className='cartao-texto'>{props.item.idcombo.preco}</span></p>
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