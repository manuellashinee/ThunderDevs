import './index.scss'
import '../../../common/common.scss'

export default function Nomelinha(props){
    return (
        <section className='nome-linha'>
            <hr className='linhas-universais'/>
            <p className='titulo-universal'>{props.nome}</p>
            <hr className='linhas-universais'/>
        </section>
    );
}