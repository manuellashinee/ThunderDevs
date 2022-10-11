import './index.scss'
import '../../../common/common.scss'

export default function Sala(props){
    return (
        <section className='Sala-p'>
            <p className='Sala1'>SALA {props.numero}</p>
        </section>
    );
}