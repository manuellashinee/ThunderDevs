import './index.scss';
import '../../../common/common.scss'
<<<<<<< HEAD
=======
import { useState, useRef, useEffect } from 'react';
import{ useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { loginAdm } from '../../../api/loginadmApi.js';

>>>>>>> 272b38124b67f3561c677ee5b833e5f9f1cfb14a




 export default function Index() {


<<<<<<< HEAD
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
            <div><input className='poder'  /></div>
          </div>
          <div className='quadro2'>
            <div> <p className='info'>SENHA:</p></div>
            <div><input type='password' className='poder' /></div>
          </div>
          </div>
          <div className='textinho'><p>OLÁ ADMINISTRADOR, LOGUE PARA ACESSAR AS FUNCIONALIDADES DO SITEMA.</p></div>
         </div>
  
         <div className='botozinhos'>
  
          <div className='B1'><button className='segundo  save'>ENTRAR</button></div>
  
         </div>
  
  
=======
  const navigate = useNavigate();
  const ref= useRef();

  useEffect(() => {
      if(storage('usuario-logado')) {

      }
  })

  async function entrarClick() {
      ref.current.continuousStart()
      setCarregando(true);

      try {

          const asnwer = await loginAdm(email,senha);
          storage('usuario-logado', asnwer);
          console.log(storage('usuario-logado'))

    

      } catch (err) {
          ref.current.complete();
          setCarregando(false);
          if (err.response.status === 401) {
              setErro(err.response.data.erro);
          }
      }

  }

  return (
    <section className='pagina-login'>
    <section className='container'>
      <div className='la'>
        <img className='logo' src='../images/logo.svg'/>
      </div>
      <div className='a'>
      <div className='quadro'>
        <div className='linha1'>
        <hr></hr>
        </div>
        <div className='faixao'>
        <div className='faixa'><h1>ENTRAR COMO ADMINISTRADOR</h1></div>
        </div>
        <div className='line2'>
        <hr></hr>
        </div>

       <div className='she'>
    
       <div className='harry'>
        <div className='squad1'>
          <div> <p className='titulo-1'>E-MAIL:</p></div>
          <div><input className='can' value={email} onChange={e => setEmail(e.target.value)}/></div>
        </div>
        <div className='squad2'>
          <div> <p className='titulo-1'>SENHA:</p></div>
          <div><input type='password' className='can' value={senha} onChange={e => setSenha(e.target.value)}/></div>
>>>>>>> 272b38124b67f3561c677ee5b833e5f9f1cfb14a
        </div>
        </div>
        <div className='descricao'><p>OLÁ ADMINISTRADOR, LOGUE PARA ACESSAR AS FUNCIONALIDADES DO SITEMA.</p></div>
       </div>

       <div className='botoes'>

        <div className='b1'><button className='primeiro  salvar-botao' onClick={entrarClick} disabled={carregando}>ENTRAR</button></div>
       </div>
       <div className='form-entrar'>{erro}</div>

      </div>
      </div>
    </section>
    </section>
    );
  }
  
 