import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';

export default function Cadastrarcombo(){
    return(
        <section className='pagina-cadastro-c'>
        <div className='cadastrar-page'>
            <div className='logo-botoes'>
                <img className='logo' src='../images/logo.svg' />
                <div className='voltar-botao'>
                    <Link to='/homeadm'><img className='flecha' src='../images/flecha.svg' /></Link>
                    <button className='salvar-botao'>SALVAR</button>
                </div>
            </div>

            <div className='container'>
                <div className='centro'>
                <p className='c-titulo'>CADASTRAR COMBO - SNACK BAR</p>
                <div className='colunas'>
                    <div className='coluna1'>
                        <p className='campos' >NOME DO COMBO:</p>
                        <input className='input-linha' type='text'/>
                        <p className='campos' >DESCRIÇÃO DO COMBO:</p>
                        <input className='input-linha' type='text'/>
                        <p className='campos' >PREÇO:</p>
                        <input className='input-linha' type='text'/>
                      </div>
                    <div className='coluna2'>
                      
                        <p className='campos'>IMAGEM:</p>
                        <input className='input-linha2' type='file'/>
                    
                    </div>
                </div>
                <div className=''>
                <button className='salvar-botao'>COMBOS REGISTRADOS:</button>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}