import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

export default function Cacete2(props){

    return (
    <section className='componente-adm2'>
         <div className='card-img'>
            <img className='img-card' src={props.imagem}/>
        </div>
        <div className='card-principal'>
           <p className='texto-card'>{props.texto}</p>
        </div>
    </section>
    );
}