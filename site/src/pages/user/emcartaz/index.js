import './index.scss';
import '../../../common/common.scss'
import Cabe2 from  '../../components/cabecalho2/index'
import Nomelinha from '../../components/cartaz-breve';
import FilmeC from '../../components/filmesc';

export default function EmCartaz(){
    return(
        <section className='em-cartaz'>
          <Cabe2/>
          <Nomelinha nome='EM CARTAZ'/>
          <div className='bordas'>
          <div className='cards-filmes'>
          </div>
          </div>
           
        </section>
    );
}