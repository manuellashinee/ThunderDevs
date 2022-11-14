import './index.scss';
import '../../../common/common.scss'
import { Link, useParams } from 'react-router-dom';
import storage from 'local-storage'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {buscarFilmePorId} from '../../../api/filmeapi.js'

export default function CompraCima(){
    const [usuario, setUsuario] = useState('');
    const { idParam } = useParams();
    const [filme,setFilme]= useState([]);

    const navigate = useNavigate();

    async function filmin(){
        const aa= await buscarFilmePorId(idParam);
        setFilme(aa[0])
        console.log(aa);
    }


    useEffect (() => {
        if(!storage('usuario-logado')) {
            navigate('/');
        } else {
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
         }
        filmin();
        
    }, [])

    return(

        <section className='compra1'>
            <div className='parte-1'>
            <div className='head'>
            <div className='cabecalho-pesquisa'>
                <div>
                    <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='foto'>
                   <div className='foto-perfil'>
                   <div><span className='letra-user'>{usuario[0]}</span></div>
                   </div>
                </div>
                  
                  
            </div>
            <Link to='/'><img className='flecha-c' src='../images/flecha.svg' /></Link>
            <div className='textos-cimabaixo'>
                <p className='titulo'>{filme.nome}</p>
                <div className='sub-textos'>
                    <p className='categoria1'>{filme.classificacao}</p>
                    <p className='categoria2'>{filme.duracao} min</p>
                    <p className='categoria2'>{filme.nomegenero}</p>
                </div>
            </div>
        </div>
        </div>
        </section>

    );
}