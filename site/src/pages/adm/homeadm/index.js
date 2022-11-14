import './index.scss';
import '../../../common/common.scss'
import Cacete from '../../components/cardshomeadm';
import Cacete2 from '../../components/cardadm2';

import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import storage from 'local-storage';

export default function HomeAdm() {

    const [adm, setAdm] = useState('');
   const navigate = useNavigate();





   
    useEffect(() => {
        if(!storage('ADM-Logado')){
            navigate('/homeadm');
        }
        else{
          const admLogado = storage('ADM-Logado');
          setAdm(admLogado.nome);
        }
    }, [])

    function sairClick(){
        storage.remove('ADM-logado');
        navigate('/');
      }
  
    return(
        <section className='home-adm'>
            <div className='parte-cima'>
                <div className='cabecalho-homeadm'>
                <img className='logo' src='../images/logo.svg'/>
               
                </div>
                <div className='tt-adm'>
                    <h1 className='titulo-adm'>BEM VINDO, <span className='cor-texto'>Administrador(a)!</span></h1>
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
                <Link to='/cadastrarfilme'><Cacete imagem='../images/add.svg' texto='ADICIONE UM FILME AO NOSSO CATALÓGO.'/></Link>
                <Link to='/filmes'><Cacete imagem='../images/edit.svg' texto='VEJA, ADICIONE, ALTERE OU REMOVA UM FILME JÁ CADASTRADO.'/></Link>
                </div>
                <div className='parte-cards'>
                <Link to='/cadastrarcombo'><Cacete imagem='../images/pizza.svg' texto='ADICIONE UM COMBO (ALIMENTO)  E VEJA OS DO SNACK BAR.'/></Link>
                <Link to='/pedidosadm'><Cacete imagem='../images/feito.svg' texto='VEJA OS PEDIDOS QUE FORAM FEITOS ATÉ AGORA.'/></Link>
                </div>
            </div> 
            <div className='sair-adm'>
                <Link to='/'><img src='../images/Login.png'  onClick={sairClick}/></Link>
                <p className='sair-palavra'>SAIR</p>
            </div>
            </div>
        </section>
    );
}