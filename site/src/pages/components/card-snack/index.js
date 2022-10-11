import './index.scss'
import '../../../common/common.scss'

export default function ArdSnack(props){

    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }

    return(
        <section className='card-snack'>
            <div className='card2'>
                <img className='img-card' src={mostrarImagem(props.item.foto)}/>
                <div className='textos'>
                <p className='preco'>{props.item.preco}</p>
                <p className='titu-combo'>{props.item.nome}</p>
                <p className='descricao'>{props.item.descricao}</p>
                </div> 
            </div>
        </section>
    );
}