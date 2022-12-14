import './index.scss'
import SnackCadastrado from '../../components/snacksCadastrados'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiltrarComboNome, vizualizarTCombos } from '../../../api/comboapi.js';
import { Link } from 'react-router-dom';
import storage from 'local-storage'

export default function SnackCadastro() {
    const [combos, setCombos] = useState([]);
    const [nome, setNome] = useState("");

    const [adm, setAdm ] = useState('');

    const navigate = useNavigate();

    async function carregarCombos(){
        const resp = await vizualizarTCombos();
        
        setCombos(resp);
    }

    async function verCombosNome(nome){
        const resp = await FiltrarComboNome(nome);
        setCombos(resp);
    }

    useEffect(() => {
        verCombosNome(nome);
    }, [nome])


    useEffect(() => {
        carregarCombos();
    }, [])

    useEffect(() => {
        if(!storage('ADM-logado')){
            navigate('/');
        }
        else{
          const AdmLogado = storage('ADM-logado');
          setAdm(AdmLogado.nome);
        }
    }, [])

    return (
        <section className='combos-cadastrados'>
        <section className='salvados'>
                
        <div className='head'>
            <div className='cabecalho-pesquisa'>
                <div>
                    <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='foto'>
    
                 <div className='pesquisa-input'>
                    <input className='pesquisa-design' type='text' value={nome} onChange={e=> setNome(e.target.value)}/>
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
                <h1 className='servulo'>SNACK'S CADASTRADOS:</h1>
            </div>
    
            <div className='setas-circle'>
    
                <div>
                   <Link to='/homeadm'> <img className='voltar'  src='../images/Arrow 1.svg'/></Link>
                </div>
    
            </div>
                {combos.map(item=>
                <SnackCadastrado item={item} />
                )}
            </section>
            </section>
    )

}