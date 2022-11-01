import './index.scss'
import '../../../common/common.scss'

export default function Hora1(props){

    function marcado() {
        if (props.marcado === true)
            return 'horario-marcado';
        else 
            return ''
    }


   


    return (
        <section className='data-inicial'>
            <p className={`data-p ${marcado()}`}>{props.hora}</p>
        </section>
    );
}