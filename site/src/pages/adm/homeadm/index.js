import './index.scss';
import '../../../common/common.scss'
import Cacete from '../../components/cardshomeadm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function HomeAdm() {

    const [adm, setAdm] = useState('');
   const navigate = useNavigate();
    useEffect(() => {
        if(!storage('Adm-Logado')){
            navigate('/homeadm');
        }
        else{
          const admLogado = storage('Adm-Logado');
          setAdm(admLogado.nome);
        }
    }, [])
  
    return(
        <section className='home-adm'>
            <div className='parte-cima'>
                <div className='cabecalho-homeadm'>
                <img className='logo' src='../images/logo.svg'/>
                <div className='icon-texto'>
                    <img className='icon-persona' src='../images/popcorn.png'/>
                    <p className='texto-catalogo'>{adm}</p>
                </div>
                </div>
                <div className='tt-adm'>
                    <h1 className='titulo-adm'>BEM VINDO, <span className='cor-texto'>{adm}!</span></h1>
                    <p className='sub-titu'>DESEJAMOS AS BOAS VINDAS AO SISTEMA <span className='sub-titu-s'>POPCORN TIME</span></p>
                </div>
                <hr/>
            </div>

           <div className='parte-baixo'>
            <div className='textos-baixo'>
            <h1 className='titulo-texto'>VAMOS COMEÇAR!</h1>
            <p className='sub-titu'>AQUI ENCONTRAM-SE ALGUMAS DAS FUNCIONABILIDADES DISPONÍVEIS:</p>
            </div>
            <div className='card-p'>
                <div className='parte-cards'>
                <Cacete imagem='../images/add.svg' texto='ADICIONE UM FILME AO NOSSO CATALÓGO.'/>
                <Cacete imagem='../images/add.svg' texto='VEJA, ADICIONE, ALTERE OU REMOVA UM FILME JÁ CADASTRADO.'/>
                </div>
                <div className='parte-cards'>
                <Cacete imagem='../images/add.svg' texto='ADICIONE UM COMBO (ALIMENTO)  E VEJA OS DO SNACK BAR.'/>
                <Cacete imagem='../images/add.svg' texto='VEJA OS PEDIDOS FEITOS ATÉ AGORA.'/>
                </div>
                <Cacete imagem='../images/add.svg' texto='ADICIONE UMA IMAGEM AO NOSSO CARROSSEL DA PÁGINA INICIAL.'/>
            </div> 
            </div>
        </section>
    );
}