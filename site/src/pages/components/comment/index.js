import './index.scss'
import '../../../common/common.scss'

export default function Comentar(props) {
    
    return (

        <section className='container-comentario'>
            <div className='border'>

            <div className='little-photo'>
                <div>
                  
                   <div><img  className='perfil' src={props.foto}/></div>
                </div>
                    
                   <div className='alinhar'>
                   <div><p>{props.usuario}</p></div>
                   <div><p>{props.filme}</p></div>
                   </div>
            </div>

            <div className='sentido'>
                    <p className='oo'>{props.comentario}</p>
            </div>
            
            <div className='star-img'>
                <img  src='../images/Star.svg'/>
                <img src='../images/Star.svg'/>
                <img src='../images/Star.svg'/>
                <img src='../images/Star.svg'/>
                <img src='../images/Star.svg'/>

            </div>
            </div>
        </section>
    )
}