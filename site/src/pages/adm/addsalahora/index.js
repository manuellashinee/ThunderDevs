import CabecalhoP from "../../components/cabecalho-sem-p";
import NomeFilme from "../../components/filmenome";
import Nomelinha from "../../components/cartaz-breve";
import Rolaa from "../../components/rola";
import './index.scss'
import { Link } from "react-router-dom";

export default function AddSaala(){
    return(
        <section className='add-sala'>
                <CabecalhoP/>
            <div className="nome-titulo">
                <NomeFilme filme='MOONLIGHT: SOBRE A LUZ DO LUAR'/>
                <Link to='/homeadm'><img className='flecha' src='../images/flecha.svg' /></Link>
            </div>
           <Nomelinha nome='SALAS'/>

           <div className="salas">
                <Rolaa/>
           </div>
           
        </section>
    );
}