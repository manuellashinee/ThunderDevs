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
              <FilmeC imagem='../images/filmeruim.png' titulo='THOR AMOR E TROVÃO' data='15/12/2022'/>
              <FilmeC imagem='../images/amizade.jpg' titulo='NARUTO E SASUKE' data='15/12/2022'/>
              <FilmeC imagem='../images/img-interessante.jpg' titulo='EVANGELION' data='15/12/2022'/>
              <FilmeC imagem='../images/ticoeteco.jpg' titulo='TARTARUGAS NINJAS' data='15/12/2022'/>
              <FilmeC imagem='../images/red.jpg' titulo='RED: CRESCER É UMA FERA' data='15/12/2022'/>
          </div>
          </div>
           
        </section>
    );
}