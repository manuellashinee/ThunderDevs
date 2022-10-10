import './index.scss'
import '../../../common/common.scss'

export default function ArdSnack(props){
    return(
        <section className='card-snack'>
            <div className='card2'>
                <img className='img-card' src={props.imagem}/>
                <div className='textos'>
                <p className='preco'>{props.preco}</p>
                <p className='titu-combo'>{props.nome}</p>
                <p className='descricao'>{props.descricao}</p>
                </div> 
            </div>
        </section>
    );
}