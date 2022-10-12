import './index.scss';
import '../../../common/common.scss'
import Nomelinha from '../../components/cartaz-breve';
import CompraCima from '../../components/compra-cima';
import Rodape from '../../components/rodape';
import Data1 from '../../components/data1';
import Sala from '../../components/sala';
import Hora1 from '../../components/hora1';

export default function Compra1(){
    return(
        <section className='compra1'>
            
     <CompraCima/>

        <div className='parte-2'>
            <div className='textos-p2'>
                <p className='titulo1'>PREÇOS:</p>
                <p className='titulo2'>MEIA: <span className='preco'>25,00</span></p>
                <p className='titulo2'>INTEIRA: <span className='preco'>42,00</span></p>
            </div>

            <Nomelinha nome='ESTREIA - 15/12'/>
            <div className='data-p'>
                <div className='data-p2'>
                    <Data1 data='15/12'/>
                    <Data1 data='16/12'/>
                    <Data1 data='17/12'/>
                </div>
                <div className='data-p2'>
                    <Data1 data='18/12'/>
                    <Data1 data='19/12'/>
                    <Data1 data='20/12'/>
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