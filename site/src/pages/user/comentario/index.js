import Comentar from "../../components/comment";
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
            padding: '2em',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '2em',
            opacity: '76%',
            backgroundColor: '#595959',
            width: '45%',
            height: '59%',
            border: '1px solid #fff',
            borderRadius: '1em',

            
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
           <div className="scrol">
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



         <section className='centerzinho'>
            <div className='quadro'>
                <div className='coment-titulo'>
                    <div className='titulo-center'><h1 className="tei">COMENTAR</h1></div>
                </div>

                <div className='inferno'>
                <div className='estrela'>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                    </div>
                    <div  className='estrela'><p>COMENTE:</p></div>
                    

                    <div><input className='opacidade'></input></div>
                </div>

                <div className='center-button'>
                    <button className='purple4'>FINALIZAR</button>
                </div>

            </div>
            </section>
                    </Modal>
                </div>
             </div>

           </div>
        </section>
    )
}