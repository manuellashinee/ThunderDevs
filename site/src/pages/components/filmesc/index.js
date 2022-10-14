import './index.scss'
import '../../../common/common.scss'
import { useNavigate } from 'react-router-dom';

export default function FilmeC(props) {
  const navigate = useNavigate();

  function filmeClick(){
    navigate(`/filmedetalhe/${props.item.id}`)
  }


    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }


    return (
        <section className='img-textos'>
            <img className='img-card' src={mostrarImagem(props.item.capa)} onClick={filmeClick} />
            <div className='textos-c'>
            <p className='titulo-c'>{props.item.nome}</p>
            <p className='data-c'>{props.item.lancamento.substr(8,2)}/{props.item.lancamento.substr(5,2)}/{props.item.lancamento.substr(0,4)}</p>
            </div>
        </section>
    );

}
