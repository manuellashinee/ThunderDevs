import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom';
import Cacete3 from '../components/cardshome';
import Cabecalho from  '../components/cabecalho/index'
import Rodape from '../components/rodape';


export default function Home(){

    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4) {
            counter = 1;
        }
    }, 5000);

    return(
        <section className='landing-page'>

            <Cabecalho/>

        <div className='container2'>
      <div class="slider">
        <div class="slides">
            <input type= "radio" name ="radio-btn" id="radio1"/>
            <input type= "radio" name ="radio-btn" id="radio2"/>
            <input type= "radio" name ="radio-btn" id="radio3"/>
            <input type= "radio" name ="radio-btn" id="radio4"/>

       <div class="slide first">
            <img className='img-carrossel' src="../images/red.jpg" alt=""/>
       </div>

       <div class="slide">
        <img className='img-carrossel' src="../images/encanto.webp" alt="" />
    </div>

    <div class="slide">
        <img className='img-carrossel' src="../images/telefone.jpg" alt="" />
   </div>

   <div class="slide">
    <img className='img-carrossel' src="../images/avatar.webp" alt="" />
    </div>
       <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>
    </div>

    <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
    <label for="radio2" class="manual-btn"></label>
    <label for="radio3" class="manual-btn"></label>
    <label for="radio4" class="manual-btn"></label>
    </div>


    </div>
    </div>
    </div>

            <div className='resumo-l'>
                <hr/>
                <p className='texto1-l'>Viva a melhor experiência em assistir um filme em São Paulo. POPCORN TIME é a maior rede de cinemas multiplex do Brasil.</p>
                <hr/>
            </div>

            <div className='ioio'>
                <div className='juma'>
                <h2 className='textocc2'>OS MELHORES PREÇOS</h2>
                <h1 className='textocc'>VOCÊ ENCONTRA AQUI!</h1>
                </div>
                
                <div className='after-hours'>
                    <div className='Pray'>
                        <div className='luv'>
                            <img className='cry' src='../images/mini.jpg'/>
                            <p>INGRESSO</p>
                            <p>R$ 42,00</p>
                        </div>
                        <div className='luv'>
                            <img className='cry' src='../images/mini.jpg'/>
                            <p>INGRESSO</p>
                            <p>R$ 42,00</p>
                        </div>
                        <div className='luv'>
                            <img className='cry' src='../images/mini.jpg'/>
                            <p>INGRESSO</p>
                            <p>R$ 42,00</p>
                        </div>
                        <div className='luv'>
                            <img className='cry' src='../images/mini.jpg'/>
                            <p>INGRESSO</p>
                            <p>R$ 42,00</p>
                        </div>

                        
                    
                    
                    </div>
                </div>
            </div>




            <div className='textos-px'>
                <img className='img-back' src="../images/texto-treco.svg" alt=""/>
                <p className='titulo-px'>PLANO ESPECIAL</p>
                <p className='texto-px'>ALUGE UMA SALA DE CINEMA E TRAGA OS AMIGOS QUE QUISER! </p>

                <div className='cards'>
                    <Cacete3 imagem='../images/tv.svg' titulo='COMBO PLANO CINEMA' texto='APROVEITE O BENEFICIOS DO CLASSICO PLANO CINEMA POR APENAS:' preco='570,'/>
                    <Cacete3 imagem='../images/estrelinha.svg' titulo='COMBO REALIDADE AUMENTADA' texto='OS BENEFICIOS DO PLANO CINEMA COM ADIÇÃO DO 3D POR APENAS:' preco='800,'/>
                    <Cacete3 imagem='../images/trovao.svg' titulo='COMBO POPCORN TIME'  texto='APROVEITE O BENEFICIOS DO PLANO CINEMA + 3D + COMBO PIPOCA POR APENAS:' preco='1.220,'/>
                </div>
            </div>

            <div className='resumo-interesse'>
            <img className='img-interesse' src="../images/interesse.png" alt=""/>
            <p className='texto1-l'>VEJA AGORA O NOSSO CATÁLOGO COMPLETO</p>
            <hr/>
            <p className='sub-titulo-i'>NOSSO CATALÓGO POSSUI OS MAIS DIVERSOS FILMES, DE DIVERSOS GENÊROS PARA TODOS OS TIPOS DE AUDIÊNCIA</p>
            <Link to='/catalogo' className='salvar-botao-i'>VER CATÁLOGO</Link>
            </div>

            <Rodape/>


        </section>
    );
}