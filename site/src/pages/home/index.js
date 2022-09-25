import './index.scss'
import '../../common/common.scss'
import Cabecalhoo from '../../componentes/cabecalho';
import { Link } from 'react-router-dom';

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

        <div className='cabecalho'>
                <div className='img-logo'>
                <img className='logo' src='../images/logo.svg'/>
                </div>
            <nav >
               <a className='links' href='#INICIO'> INICIO </a>
               <a className='links' href='# EM CARTAZ'> EM CARTAZ </a>
               <a className='links' href='#EM BREVE'> EM BREVE </a>
               <a className='links' href='#SNACK BAR'> SNACK BAR </a>
            </nav>
            <div className='botao-login'>
            <Link to='/login' className='salvar-botao'>LOGIN</Link>
            </div>
        </div>

        <div className='container2'>
      <div class="slider">
        <div class="slides">
            <input type= "radio" name ="radio-btn" id="radio1"/>
            <input type= "radio" name ="radio-btn" id="radio2"/>
            <input type= "radio" name ="radio-btn" id="radio3"/>
            <input type= "radio" name ="radio-btn" id="radio4"/>

       <div class="slide first">
            <img className='img-carrossel' src="../images/tartarugas.jpg" alt=""/>
       </div>

       <div class="slide">
        <img className='img-carrossel' src="../images/amizade.jpg" alt="" />
    </div>

    <div class="slide">
        <img className='img-carrossel' src="../images/ticoeteco.jpg" alt="" />
   </div>

   <div class="slide">
    <img className='img-carrossel' src="../images/img-interessante.jpg" alt="" />
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
                <Cabecalhoo/>
                <hr/>
            </div>

            <div>
            <img src="../images/interesse.png" alt=""/>
            </div>
        </section>
    );
}