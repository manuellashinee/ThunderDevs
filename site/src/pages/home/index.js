import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom';
import Cacete3 from '../components/cardshome';
import Cabecalho from  '../components/cabecalho/index'
import Rodape from '../components/rodape';
import { useState, useEffect } from 'react';
import { colocarFilmeDestaque } from '../../api/filmeapi';
import DestaqueProps from '../components/destaque';
import Storage from "local-storage";


export default function Home(){
    const [destaque, setDestaque] = useState([]);

    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4) {
            counter = 1;
        }
    }, 5000);

    async function verDestaque() {
        const resp = await colocarFilmeDestaque();
        setDestaque(resp);
      }

      useEffect(() => {
        verDestaque();
        Storage('ingresso',[]);
      }, [])
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
                <p className='texto1-l'>Viva a melhor experi??ncia em assistir um filme em S??o Paulo. POPCORN TIME ?? a maior rede de cinemas multiplex do Brasil.</p>
                <hr/>
            </div>

            <div className='ioio'>
                <div className='juma'>
                <h2 className='textocc2'>OS MELHORES PRE??OS</h2>
                <h1 className='textocc'>VOC?? ENCONTRA AQUI!</h1>
                </div>
                
                <div className='after-hours'>
                    <div className='Pray'>
                   
                        
                      {destaque.map(item=> 
                      <DestaqueProps item={item}/>)
                      }
                                               
                    
                    
                    </div>
                </div>
            </div>




            <div className='textos-px'>
                <img className='img-back' src="../images/texto-treco.svg" alt=""/>
                <p className='titulo-px'>PLANO ESPECIAL</p>
                <p className='texto-px'>ALUGE UMA SALA DE CINEMA E TRAGA OS AMIGOS QUE QUISER! </p>

                <div className='cards'>
                    <Cacete3 imagem='../images/tv.svg' titulo='COMBO PLANO CINEMA' texto='APROVEITE O BENEFICIOS DO CLASSICO PLANO CINEMA POR APENAS:' preco='570,'/>
                    <Cacete3 imagem='../images/estrelinha.svg' titulo='COMBO REALIDADE AUMENTADA' texto='OS BENEFICIOS DO PLANO CINEMA COM ADI????O DO 3D POR APENAS:' preco='800,'/>
                    <Cacete3 imagem='../images/trovao.svg' titulo='COMBO POPCORN TIME'  texto='APROVEITE O BENEFICIOS DO PLANO CINEMA + 3D + COMBO PIPOCA POR APENAS:' preco='1.220,'/>
                </div>
            </div>

            <div className='resumo-interesse'>
            <img className='img-interesse' src="../images/interesse.png" alt=""/>
            <p className='texto1-l'>VEJA AGORA O NOSSO CAT??LOGO COMPLETO</p>
            <hr/>
            <p className='sub-titulo-i'>NOSSO CATAL??GO POSSUI OS MAIS DIVERSOS FILMES, DE DIVERSOS GEN??ROS PARA TODOS OS TIPOS DE AUDI??NCIA</p>
            <Link to='/catalogo' className='salvar-botao-i'>VER CAT??LOGO</Link>
            </div>

            <Rodape/>


        </section>
    );
}