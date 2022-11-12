import './index.scss'
import '../../../common/common.scss'
import { Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function FilmeD(props){
    const navigate = useNavigate();
    
    const [atual, setAtual] = useState(true);


    function verData(){

        let lanca= new Date(props.item.lancamento);
        let agora = new Date();
        let x= agora.getTime();
        let mento = lanca.getTime();
        let ver= x-mento;

        console.log(ver)

        if(ver<0){
            setAtual(false)
        }
        else
            setAtual(true)
    
    }
    function irCompra(){
        navigate(`/compra/${props.item.id}`)
    }

    function irComentarios(){
        navigate(`/comentarios/${props.item.id}`)
    }

    function mostrarImagem(imagem) {
        if (!imagem)
          return './images/logo.svg'
        else
          return `http://localhost:5000/${imagem}`
      }


      useEffect(() => {
        verData();
      }, [props])
    
     


    return(
        <section className='page-principal' style={{ 
            backgroundImage: `(${props.item.capa})`
        }}>
             <Link to='/catalogo' className='flecha-c'><img  src='../images/flecha.svg' /></Link>
        <div className='filme-d-p'>
            <div className='imagems'>
                <div className='container-filme'>
                <img className='img-filme' src={mostrarImagem(props.item.capa)}  />
                <div className='top-right-verde'>{props.item.avaliacao}</div>
                </div>
            </div>
            <div className='alinhar'>
            <div className='parte-2'>
                <div className='titu-botao'>
                    <p className='titulo'>{props.item.nome}</p>
                    <div>
                    <p className='compra-botao' onClick={irCompra}>Comprar Ingressos</p>
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
                    <div className='tomate-pipoca'>
                        {atual=== true?
                        <div className='tp-img-inicio'>
                            <img className='tomate-pipoca-img' src='../images/tomate.svg'/>
                            <div className='tp-principal'>
                                <p className='nota'><span>{props.item.tomato}</span>%</p>
                                <p className='textos-tp'>TOMATOMETER</p>
                            </div> 
                            <div className='tp-img-inicio'>
                            <img className='pipoca-img' src='../images/pipoca.svg'/>
                            <div className='tp-principal'>
                                <p className='nota'><span>{props.item.audiencia}</span>%</p>
                                <p className='textos-tp'>AUDIENCE SCORE</p>
                            </div> 
                            </div>
                        </div>
                    :<p className='lancamento'> LANÇAMENTO: <span>{props.item.lancamento.substr(8,2)}/{props.item.lancamento.substr(5,2)}/{props.item.lancamento.substr(0,4)}</span> </p>}
                    </div>
                    <div className='b'>
                    <p className='comentarios-botao' onClick={irComentarios} >Adicionar Comentário</p>
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