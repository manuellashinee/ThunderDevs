import './index.scss'
import '../../common/common.scss'

export default function Cadastrar(){
    return (
        <section className='pagina-cadastro'>
        <div className='cadastrar-page'>
            <div className='logo-botoes'>
                <img className='logo' src='../images/logo.svg' />
                <div className='voltar-botao'>
                    <img src='../images/logo.svg' />
                    <button>SALVAR</button>
                </div>
            </div>

        </div>
        </section>
    );
}