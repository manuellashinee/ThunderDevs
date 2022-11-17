import './index.scss';
import PedidosFeitos from '../../components/pedidosFeitos';
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { todosIngressos } from '../../../api/pedidoFilmeApi.js';

export default function PedidosAdm(){
    const [ingressos,setIngressos]=useState([])
    const [adm, setAdm ] = useState('');
    const navigate = useNavigate();

    async function carregarIngreessos(){
        const x= await todosIngressos();
        setIngressos(x);
        console.log(x)
    }


    useEffect(() => {
        if(!storage('ADM-logado')){
            navigate('/homeadm');
        }
        else{
          const AdmLogado = storage('ADM-logado');
          setAdm(AdmLogado.nome);
        }
        carregarIngreessos();
    }, [])
  

    return (

    <section className='pedidos-adm'>
        <section className='salvados'>
            
        <div className='head'>
        <div className='cabecalho-pesquisa'>
            <div>
                <img className='logo' src='../images/logo.svg'/>
            </div>
            <div className='foto'>

             <div className='pesquisa-input'>
                <input className='pesquisa-design' type='text'/>
                <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
             </div>

             <div className='foto-perfil'>
                   <div><span className='letra-user'>{adm[0]}</span></div>
                   <div className='nome-embaixo'><p>{adm}</p></div>
             </div>
                
            </div>
              
              
        </div>
    </div>
        
        <div className='title'>
            <h1 className='titulo-snack'>PEDIDOS FEITOS:</h1>
        </div>

        <div className='setas-circle'>
            <div>
              <Link to='/homeadm' > <img className='voltar'  src='../images/Arrow 1.svg'/></Link>
            </div>
        </div>
        {ingressos.map(item=>
           <PedidosFeitos item={item}/>)}
        </section>
    </section>
    )
}
