import './index.scss'
import '../../../common/common.scss'
import { estrelasAvaliacao } from '../estrelasAvaliacao'

export default function Comentar(props) {
    
    return (

        <section className='container-comentario'>
            <div className='border'>

            <div className='little-photo'>
                <div>
                  
                   <div  className='perfil'>{props.item.nome.substr(0,1)}</div>
                </div>
                    
                   <div className='alinhar'>
                   <div><p>{props.item.nome}</p></div>
                   <div><p>{props.item.filme}</p></div>
                   </div>
            </div>

            <div className='sentido'>
                    <p className='oo'>{props.item.frase}</p>
            </div>
           {estrelasAvaliacao(props.item.avaliacao)}
            </div>
        </section>
    )
}