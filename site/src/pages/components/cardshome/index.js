import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

export default function Cacete3(props){

    return (
    <section className='componente-home2'>
         <div className='card-img'>
            <img className='img-card' src={props.imagem}/>
        </div>
        <div className='card-principal'>
           <p className='titulo-card'>{props.titulo}</p>
           <hr/>
           <p className='texto-card'>{props.texto}</p>
           <p className='preco-card'>R${props.preco}</p>
        </div>
    </section>
    );
}