import './index.scss';
import '../../../common/common.scss'
import { login } from '../../api/loginApi'
import { useState, useRef, useEffect } from 'react';
import{ Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage'





 export default function loginAdm() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

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
          
          const asnwer = await login(email, senha);
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
            <div><input className='poder'  value={email} onChange={e => setEmail(e.target.value)}/></div>
          </div>
          <div className='quadro2'>
            <div> <p className='info'>SENHA:</p></div>
            <div><input type='password' className='poder' value={senha} onChange={e => setSenha(e.target.value)}/></div>
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
  
 
  