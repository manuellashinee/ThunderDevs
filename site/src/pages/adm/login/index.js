import './index.scss';
import '../../../common/common.scss'
import { useState, useRef, useEffect } from 'react';
import{ useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { loginAdm } from '../../../api/loginadmApi.js';





 export default function Index() {

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
    <section className='adm-login'>
    <section className='container'>
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
          
  
         <div className='botozinhos'>
  
          <div className='B1'><button className='segundo  save' onClick={entrarClick} disabled={carregando}>ENTRAR</button></div>
         </div>
         <div className='form-entrar'>{erro}</div>
      </section>
      </section>
    );
  }
  
 