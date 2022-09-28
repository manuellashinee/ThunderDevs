import './index.scss'
import '../../../common/common.scss'

export default function FilmeC(props) {

    return (
        <section className='img-textos'>
            <img className='img-card' src={props.imagem}/>
            <div className='textos-c'>
            <p className='titulo-c'>{props.titulo}</p>
            <p className='data-c'>{props.data}</p>
            </div>
        </section>
    );

}
