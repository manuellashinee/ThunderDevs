import Comentar from "../../components/comment";
import Comentaras from "../../components/comentariozinho";
import { useParams} from 'react-router-dom'
import './index.scss'
import '../../../common/common.scss'
import { adicionarComentario, verComentarios } from "../../../api/comentarioApi.js";
import { useEffect, useState } from "react";
import Storage from 'local-storage'
import Modal from  'react-modal'

Modal.setAppElement('#root')


export default function Comentario() {

    const [comentarios, setComentarios] = useState([]);
    const {idParamComent} = useParams();
    const [abrirModal, setAbrirModal] = useState(false)
    const [estrelas, setEstrelas] = useState(1);
    const [frase, setFrase]= useState("");

    function abrirModalManual(){
        setAbrirModal(true)
    }

    function fecharModalManual(){
        setAbrirModal(false)
    }

    function lerEstrelas(valor, estrela) {
      
        if (valor <= estrela)
            return 'star-icon2 ativo'
        else
            return 'star-icon2'

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

    async function enviarcoment(){
        const x= await adicionarComentario(idParamComent,Storage('usuario-logado').id,frase,estrelas);
        fecharModalManual();
        setEstrelas(1);
        setFrase("");
       }

    useEffect(() => {
        carregarComents(idParamComent)
        console.log(comentarios)
        }, [comentarios])

       
    
    return(

        <section>

            <Comentaras info={comentarios}/>

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
                    <ul className='cont-avaliacao-star2'>
                        <li className={lerEstrelas(estrelas,1)} onClick={e=> setEstrelas(1)}></li>
                        <li className={lerEstrelas(estrelas,2)} onClick={e=> setEstrelas(2)}></li>
                        <li className={lerEstrelas(estrelas,3)} onClick={e=> setEstrelas(3)}></li>
                        <li className={lerEstrelas(estrelas,4)} onClick={e=> setEstrelas(4)}></li>
                        <li className={lerEstrelas(estrelas,5)} onClick={e=> setEstrelas(5)}></li>
                    </ul>
                    </div>
                    <div  className='estrela'><p>COMENTE:</p></div>
                    

                    <div className="padding-coment"><textarea className='opacidade' value={frase} onChange={e=> setFrase(e.target.value)}></textarea></div>
                </div>

                <div className='center-button'>
                    <button className='purple4' onClick={enviarcoment}>FINALIZAR</button>
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