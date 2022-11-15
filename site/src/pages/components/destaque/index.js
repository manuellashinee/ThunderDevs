import './index.scss'
import '../../../common/common.scss'

export default function DestaqueProps(props){

    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }


    return (
        <div className='luv'>
        <img className='cry' src={mostrarImagem(props.item.capa)}/>
        <p>{props.item.nome}</p>
        <p>R$ 42,00</p>
        </div>
    );
}