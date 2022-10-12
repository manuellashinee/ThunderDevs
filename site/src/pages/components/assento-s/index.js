import './index.scss'
import '../../../common/common.scss'

export default function AssentoS(props){
return(
    <section className='assentos-p'>
        <div className='textos-p2'>
            <div className='t-botao'>
                
                <p className='categoria1'>{props.assento}</p>
              
            </div>
           
        </div>
            </section>
);
}