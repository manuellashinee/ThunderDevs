import './index.scss'
import '../../../common/common.scss'

export default function Data1(props){
    return (
        <section className='data-inicial'>
            <p className='data-p'>{props.data}</p>
        </section>
    );
}