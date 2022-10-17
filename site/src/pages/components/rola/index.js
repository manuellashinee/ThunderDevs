import './index.scss';
import '../../../common/common.scss'
import Hora1 from '../hora1';

export default function Rolaa(props){
    return(
        <section className='rola-p'>
            <div className='data-sala'>
                <p className='sala-cor'>SALA <span>{props.numero}</span></p>
                <p className='datas'>DATAS DISPONÍVEIS:</p>
            </div>

            <div className='texto-data'>
                <p>DE:</p>
                <input className='data-texto2' type='date'/>
            </div>
            <div className='texto-data'>
                <p>ATÉ:</p>
                <input className='data-texto2' type='date'/>
            </div>

                <p className='datas2'>HORÁRIOS:</p>
                <div className='data-p'>
                <div className='data-p2'>
                    <Hora1 hora='15/12'/>
                    <Hora1 hora='16/12'/>
                    <Hora1 hora='17/12'/>
                </div>
                <div className='data-p2'>
                    <Hora1 hora='18/12'/>
                    <Hora1 hora='19/12'/>
                    <Hora1 hora='20/12'/>
                </div>
                <p className='compra-botao'>SALVAR</p>
            </div>
            <hr/>
        </section>
    );
}