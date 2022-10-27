import Comentar from "../../components/comment";
import './index.scss'
import Comentaras from "../../components/comentariozinho";
import { useParams} from 'react-router-dom'
import './index.scss'
import '../../../common/common.scss'
import { verComentarios } from "../../../api/comentarioApi.js";
import { useEffect, useState } from "react";
import Modal from  'react-modal'

Modal.setAppElement('#root')


export default function Comentario() {
    const [comentarios, setComentarios] = useState([]);
    const {idParam} = useParams();
    const [abrirModal, setAbrirModal] = useState(false)

    function abrirModalManual(){
        setAbrirModal(true)
    }

    function fecharModalManual(){
        setAbrirModal(false)
    }

    const customStyles = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform : 'translate(-50%, -50%)',
            borderRadius : '1em',
            backgroundColor : 'red',
        }
    }

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
                    <button className="roxinho" onClick={abrirModalManual}>Comentar</button>

                    <Modal
                    isOpen= {abrirModal}
                    onRequestClose= {fecharModalManual}
                    style= {customStyles}
                    >

                        <h1> Chupe minhas bola </h1>
                        <button onClick={fecharModalManual}> sair </button>
                    </Modal>
                </div>
             </div>

           </div>
        </section>
    )
}