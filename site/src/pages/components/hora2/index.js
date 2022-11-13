import './index.scss'
import '../../../common/common.scss'

export default function Hora2(props){

    function marcado() {
        if (props.marcado === true)
            return 'horario-marcado';
        else 
            return ''
    }


    return (
        <section className='data-inicial2'>
            <p className={`data-p2 ${marcado()}`}>{props.item.HORARIO}</p>
        </section>
    );
}