import './index.scss';
import '../../../common/common.scss'

export default function NomeFilme(props){
    return(
        <section className='c-nomefilmeadd'>
        <p className='nome-filme-c'>FILME:<span className='nome-filme-c2'>  {props.nome}</span></p>
        </section>
    );
}