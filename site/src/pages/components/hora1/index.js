import './index.scss'
import '../../../common/common.scss'

export default function Hora1(props){
    return (
        <section className='data-inicial'>
            <p className='data-p'>{props.hora}</p>
        </section>
    );
}