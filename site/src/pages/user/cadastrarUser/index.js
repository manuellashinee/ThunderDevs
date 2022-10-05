import './index.scss'
import '../../../common/common.scss'

export default function CadastrarUser() {

    return(
      <section className='pagina-cadastro2'>
      <section className='container'>
      <div className='la'>
        <img className='logo' src='../images/logo.svg'/>
      </div>
      <div className='a'>
      <div className='quadro'>

      <div><h1 className='tituluzinho'>CADASTRE-SE:</h1></div>
        
        

       <div className='she'>
    
       <div className='harry coluna1'>
        <div className='squad1'>
          <div> <p className='titulo-1'>NOME:</p></div>
          <div><input className='can'/></div>
        </div>

        <div className='squad1'>
          <div> <p className='titulo-1'>TELEFONE:</p></div>
          <div><input className='can'/></div>
        </div>

        <div className='squad1'>
          <div> <p className='titulo-1'>E-MAIL:</p></div>
          <div><input className='can'/></div>
        </div>
        
        <div className='squad2'>
          <div> <p className='titulo-1' >SENHA:</p></div>
          <div><input type='password' className='can'/></div>
        </div>
        </div>

        <div className='harry coluna2'>
        <div className='squad1'>
          <div> <p className='titulo-1'>DATA DE NASCIMENTO:</p></div>
          <div><input className='can'/></div>
        </div>

        <div className='squad1'>
          <div> <p className='titulo-1'>CPF:</p></div>
          <div><input className='can'/></div>
        </div>
        
        <div className='squad1'>
          <div> <p className='titulo-1'>RG:</p></div>
          <div><input className='can'/></div>
        </div>
        
        
        <div className='squad2'>
          <div> <p className='titulo-1'>CONFIRME SUA SENHA:</p></div>
          <div><input type='password' className='can'/></div>
        </div>
        </div>

       </div>

        <div className='final'>
          <button className='fine-botao'>FINALIZAR</button>
        </div>


      </div>
      </div>
    </section>
  </section>

 );

}