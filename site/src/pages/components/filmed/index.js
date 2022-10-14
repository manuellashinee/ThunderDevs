import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

export default function FilmeD(props){
    

    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }


    return(
        <section className='page-principal' >
             <Link to='/' className='flecha-c'><img  src='../images/flecha.svg' /></Link>
        <div className='filme-d-p'>
            <div className='imagems'>
                <img className='img-filme' src={mostrarImagem(props.item.capa)}  />
            </div>
            <div className='alinhar'>
            <div className='parte-2'>
                <div className='titu-botao'>
                    <p className='titulo'>{props.item.nome}</p>
                    <div>
                    <p className='compra-botao'>Comprar Ingressos</p>
                    </div>
                </div>
            </div>
            <hr className='linha-filme'/>
            <div className='campos'>
                <p className='sinopse1'>Sinopse:<span className='sinopse2'>{props.item.sinopse}
</span></p>
            <p className='sub1'>Duração:<span className='sub2'>{props.item.duracao} min</span></p>
            <p className='sub1'>Ator Principal:<span className='sub2'>{props.item.ator}</span></p>
            <p className='sub1'>Diretor:<span className='sub2'>{props.item.diretor}</span></p>
            <p className='sub1'>Gênero:<span className='sub2'>{props.item.nomegenero}</span></p>
            <p className='sub1'>Classificação:<span className='sub2'>{props.item.classificacao} Anos</span></p>
            <div className='alinhar'>
                <div className='parte-2'>
                    <div className='titu-botao'>
                    <div>
                    <p className='titulo'> amanha eu faço </p>
                    </div>
                    <div>
                    <p className='comentarios-botao'>Adicionar Comentário</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>

        </div>

        </section>
    );
}