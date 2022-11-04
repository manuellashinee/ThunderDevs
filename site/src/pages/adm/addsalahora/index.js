import CabecalhoP from "../../components/cabecalho-sem-p";
import NomeFilme from "../../components/filmenome";
import Nomelinha from "../../components/cartaz-breve";
import Rolaa from "../../components/rola";
import './index.scss'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { vizualizarTSalas } from "../../../api/salaApi.js";
import { buscarFilmePorId } from "../../../api/filmeapi.js";

export default function AddSaala(){
        const [salas, setSalas] = useState([]);
        const [filmead, setFilmead] = useState([]);
        const [nomead, setNomead] = useState("");
        const {idParam} = useParams();

        async function carregarfilme1(){
            const resp = await buscarFilmePorId(idParam);
            setFilmead(resp);
            setNomead(resp[0].nome);
        }


        async function carregarSalas(){
            const resp = await vizualizarTSalas();
            
            setSalas(resp);
        }
    
        useEffect(() => {
            carregarSalas();
            carregarfilme1();
        }, [])

    return(
        <section className='add-sala'>
                <CabecalhoP/>
            <div className="nome-titulo">
                <NomeFilme nome={ nomead}/>
                <Link to='/homeadm'><img className='flecha' src='../images/flecha.svg' /></Link>
            </div>
           <Nomelinha nome='SALAS'/>

           {salas.map(item=>
           <div className="salas">
                <Rolaa item={item}/>
           </div>)}
           
        </section>
    );
}