import './index.scss';
import '../src/common/common.scss'



 export default function loginAdm() {
    return (
      <section className='adm-login'>
      <section className='container'>
        <div className='la'>
          <img className='logo' src='../images/logo.svg'/>
        </div>
        <div className='a'>
        <div className='quadro'>
          <div className='line1'>
          <hr></hr>
          </div>
          <div className='faixao'>
          <div className='faixa'><h1>ENTRAR COMO ADMINISTRADOR</h1></div>
          </div>
          <div className='line2'>
          <hr></hr>
          </div>  
  
         <div className='informacoes'>
      
         <div className='inserir'>
          <div className='quadro1'>
            <div> <p className='info'>E-MAIL:</p></div>
            <div><input className='poder'/></div>
          </div>
          <div className='quadro2'>
            <div> <p className='info'>SENHA:</p></div>
            <div><input type='password' className='poder'/></div>
          </div>
          </div>
          <div className='textinho'><p>OLÁ ADMINISTRADOR, LOGUE PARA ACESSAR AS FUNCIONALIDADES DO SITEMA.</p></div>
         </div>
  
         <div className='botozinhos'>
  
          <div className='B1'><button className='segundo  save'>ENTRAR</button></div>
  
         </div>
  
  
        </div>
        </div>
      </section>
      </section>
    );
  }
  
 
  