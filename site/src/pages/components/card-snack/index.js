import './index.scss'
import '../../../common/common.scss'
import { useNavigate } from 'react-router-dom'

export default function ArdSnack(props){

    const navigate = useNavigate();

      function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }

      
      function AbrirPagamento(id){
        navigate('/pagamentocombo/' + id)
      }



    return(
        <section className='card-snack' onClick={() => AbrirPagamento(props.item.idcombo)}>
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