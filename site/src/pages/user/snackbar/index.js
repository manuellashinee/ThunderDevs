import './index.scss';
import '../../../common/common.scss'
import Cabe2 from  '../../components/cabecalho2/index'
import ArdSnack from '../../components/card-snack';

export default function SnackBar(){
    return(
        <section className='snackbar'>
          <div className='parte-1snack'>
           <Cabe2/>
           <p className='nome-titulo'>SNACK BAR</p>
          </div>
          <div className='parte-2snack'>
            <p className='combo-nome'>COMBOS:</p>
          </div>
          <div className='card-snack'>
            <ArdSnack imagem='/images/amizade.jpg' preco='170,00' nome='NARUTO & SASUKE' descricao='PIPOCA GRANDE, DOIS REFRIGERANTE E TORTILAS COM QUEIJO CHEDAR'/>
            <ArdSnack imagem='/images/amizade.jpg'/>
            <ArdSnack imagem='/images/amizade.jpg'/>
            <ArdSnack imagem='/images/amizade.jpg'/>
          </div>

        </section>
    );
}