import './index.scss';
import '../../../common/common.scss'
import CompraCima from '../../components/compra-cima';
import AssentoS from '../../components/assento-s';
import Rodape from '../../components/rodape';
import Sessao2 from '../../components/horario2';
import { Link, useNavigate,useParams } from 'react-router-dom';

export default function Compra3(){    
    const navigate = useNavigate();
    const {idParam}= useParams();

    function proxPag(){
        navigate(`/compra4/${idParam}`)
    }

    return(
        <section className='compra3-principal'>
            <CompraCima/>
            <div className='assentos'>
            <p className='titulo1'>ASSENTOS:</p>
            <AssentoS assento='D6'/>
            <AssentoS assento='D6'/>
            </div>
            <Sessao2 horario='13:30'/>
            <div className='parte-2'>
                <p className='preco'>SELECIONE O TIPO DE INGRESSO:</p>
                <div className='input-textop'>
                    <div className='input-texto2'>
                        <div className='input-textop'>
                            <p className='titulo2'>INTEIRA</p>
                            <p className='titulo3'>R$ 42,00</p>
                        </div>
                        <div>
                        <input className='input-ingresso' type='number'/>
                        </div>
                    </div>
                    <div className='input-texto2'>
                        <div className='input-textop'>
                            <p className='titulo2'>MEIA</p>
                            <p className='titulo3'>R$ 25,00</p>
                        </div> 
                        <div>
                        <input className='input-ingresso' type='number'/>
                        </div>
                    </div>
                </div>

                <div className='total-botao'>
                    <p className='titulo2'>TOTAL: <span className='valor-total'>R$ 42,00</span></p>
                    <div className='botao-prosseguir'>
                       <p onClick={proxPag} className='botao-ir'>PROSSEGUIR</p> 
                    </div>
                </div>
            </div>
            <Rodape/>
        </section>
    );
}