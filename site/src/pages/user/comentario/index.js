import Comentar from "../../components/comment";
import './index.scss'
import Comentaras from "../../components/comentariozinho";
import './index.scss'
import '../../../common/common.scss'


export default function Comentario() {
    
    return(

        <section>
            <Comentaras nome='RED'/>

           <div className="bagui-row">
           <div>
            <Comentar foto= '../images/elizinha.svg' usuario='Manu' filme='RED' comentario='FILMINHO MUITO LEGAL, ENVOLVENTE, ESPECIALMENTE O PANDA'/>
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