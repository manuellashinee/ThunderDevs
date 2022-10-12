import './index.scss'
import '../../../common/common.scss'

export default function Sessao2(props){
    return (
    <section className='sessao-p'>
    <div className='t-botao2'>
    <p className='titulo2'>SESSÃO:</p>
    <p className='data-p'>{props.horario}</p>
    </div>
    </section>
    );
}