import Comentar from "../../components/comment";
import './index.scss'
import Comentaras from "../../components/comentariozinho";
import { useParams} from 'react-router-dom'
import './index.scss'
import '../../../common/common.scss'
import { verComentarios } from "../../../api/comentarioApi.js";
import { useEffect, useState } from "react";


export default function Comentario() {
    const [comentarios, setComentarios] = useState([]);
    const {idParam} = useParams();

    async function carregarComents(idfilme){
        const resposta = await verComentarios(idfilme);
        setComentarios(resposta);
    }

    useEffect(() => {
        carregarComents(idParam);
        }, [])

    
    return(

        <section>
            <Comentaras nome='RED'/>

           <div className="bagui-row">
           <div>
            {comentarios.map(item=>
            <Comentar item={item}/>
            )}
             </div>

             <div className="opinion">
                <div className="fds"><p>DÊ NOTAS, CONVERSE, E FALE SUAS OPINÕES SOBRE ESSE FILME.</p></div>
                <div className="espaco" >
                    <button className="roxinho">Comentar</button>
                </div>
             </div>

           </div>
        </section>
    )
}