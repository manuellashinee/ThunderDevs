import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom';
import Cacete3 from '../components/cardshome';
import Cabecalho from  '../components/cabecalho/index'

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

            <div className='textos-px'>
                <img className='img-back' src="../images/texto-treco.svg" alt=""/>
                <p className='titulo-px'>PLANO ESPECIAL</p>
                <p className='texto-px'>ALUGE UMA SALA DE CINEMA E TRAGA OS AMIGOS QUE QUISER! </p>

                <div className='cards'>
                    <Cacete3 imagem='../images/texto-treco.svg' titulo='PLANO CINEMA' texto='kakaalla'/>
                    <Cacete3 imagem='../images/texto-treco.svg' titulo='COMBO REALIDADE AUMENTADA' texto='kakaalla'/>
                    <Cacete3 imagem='../images/texto-treco.svg' titulo='COMBO POPCORN TIME'  texto='kakaalla'/>
                </div>
            </div>

            <div className='resumo-interesse'>
            <img className='img-interesse' src="../images/interesse.png" alt=""/>
            <p className='texto1-l'>VEJA AGORA O NOSSO CATÁLOGO COMPLETO</p>
            <hr/>
            <p className='sub-titulo-i'>NOSSO CATALÓGO POSSUI OS MAIS DIVERSOS FILMES, DE DIVERSOS GENÊROS PARA TODOS OS TIPOS DE AUDIÊNCIA</p>
            <Link to='/catalogo' className='salvar-botao-i'>VER CATÁLOGO</Link>
            </div>

            <div className='rodape'>

                <div className='redeS'>

                    <div className='logoo'>
                    <img className='popcorn' src='../images/logo.svg'/>
                    <h2>SIGA NOSSAS REDES SOCIAS:</h2>
                    </div>

                    <div className='sociais'>
                        <div>
                            <img src='../images/insta/Solid/Brands/Instagram.svg'/>
                        </div>
                        
                        <div>
                            <img src='../images/face/Solid/Brands/Facebook.svg'/>
                        </div>

                        <div>
                            <img src='../images/Solid/Brands/Twitter.svg'/>
                        </div>

                    </div>
                </div>

                <div className='filme' >
                    <div><h1>FILMES</h1></div>
                    
                    <div className='desc'>
                    <div className='espaco'>Programação</div>
                    <div className='espaco'>Em Cartaz</div>
                    <div className='espaco'>Em Breve</div>
                    <div className='espaco'>Ingressos</div>
                    </div>
                </div>

                <div className='snack'>
                   <div> <h1>SNACK BAR</h1></div>

                    <div className='desc'>
                    <div className='espaco'>Cardápio Snack Bar</div>
                    <div className='espaco'>Cardápios Prime</div>
                    </div>
                </div>

                <div className='salas'>
                    <div> <h1>SALAS</h1></div>
                   
                   <div className='desc'>
                   <div className='espaco'>3D</div>
                    <div className='espaco'>XD</div>
                    <div className='espaco'>2D</div>
                   </div>

                </div>

                <div className='contatos'>
                     <div> <h1>CONTATOS</h1></div>

                    <div className='desc'>
                        <div className='espaco'>contato@2022popcorntime@email.com</div>
                    </div>

                </div>
           
            </div>


        </section>
    );
}