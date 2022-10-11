import './index.scss'
import SnackCadastrado from '../../components/snacksCadastrados'

export default function SnackCadastro() {
    

    return (
        <section className='combos-cadastrados'>
        <section className='salvados'>
                
        <div className='head'>
            <div className='cabecalho-pesquisa'>
                <div>
                    <img className='logo' src='../images/logo.svg'/>
                </div>
                <div className='foto'>
    
                 <div className='pesquisa-input'>
                    <input className='pesquisa-design' type='text'/>
                    <button  className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg'/></button>
                 </div>
    
                   <div className='foto-perfil'>
                   <div><img  className='perfil' src='../images/elizinha.svg'/></div>
                   <div><p>Manu</p></div>
                   </div>
                    
                </div>
                  
                  
            </div>
        </div>
            
            <div className='title'>
                <h1 className='servulo'>SNACK'S CADASTRADOS:</h1>
            </div>
    
            <div className='setas-circle'>
    
                <div>
                    <img className='voltar'  src='../images/Arrow 1.svg'/>
                </div>
    
            </div>
                <SnackCadastrado capa ='../images/imagem_combo.svg' nome='COMBO BIG'  descricao='PIPOCA GRANDE, TRES REFRIGERANTE, TORTILAS COM QUEIJO CHEDAR E BALA FINI' valor='70,00'/>
            </section>
            </section>
    )

}