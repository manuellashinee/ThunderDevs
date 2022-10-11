import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

export default function FilmeD(){
    return(
        <section className='page-principal'>
             <Link to='/'><img className='flecha-c' src='../images/flecha.svg' /></Link>
        <div className='filme-d-p'>
            <div className='imagems'>
                <img className='img-filme' src='../images/filmeruim.png' />
            </div>
            <div className='alinhar'>
            <div className='parte-2'>
                <div className='titu-botao'>
                    <p className='titulo'>MOONLIGHT: SOBRE A LUZ DO LUAR</p>
                    <div>
                    <p className='compra-botao'>Comprar Ingressos</p>
                    </div>
                </div>
            </div>
            <hr className='linha-filme'/>
            <div className='campos'>
                <p className='sinopse1'>Sinopse:<span className='sinopse2'>Black trilha uma jornada de autoconhecimento enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami. Encontrando amor em locais surpreendentes, ele sonha com um futuro maravilhoso.
</span></p>
            <p className='sub1'>Duração:<span className='sub2'>180 min</span></p>
            <p className='sub1'>Atores Principais:<span className='sub2'>Zoe Saldana</span></p>
            <p className='sub1'>Diretor:<span className='sub2'>Barry Jenkins</span></p>
            <p className='sub1'>Gênero:<span className='sub2'>Aventura</span></p>
            <p className='sub1'>Classificação:<span className='sub2'>12 Anos</span></p>
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