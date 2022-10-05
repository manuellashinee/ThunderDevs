import './index.scss'
import '../../../common/common.scss'

export default function FilmeC(props) {


    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }


    return (
        <section className='img-textos'>
            <img className='img-card' src={mostrarImagem(props.item.capa)}/>
            <div className='textos-c'>
            <p className='titulo-c'>{props.item.nome}</p>
            <p className='data-c'>{props.item.lancamento.substr(8,2)}/{props.item.lancamento.substr(5,2)}/{props.item.lancamento.substr(0,4)}</p>
            </div>
        </section>
    );

}
