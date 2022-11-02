import './index.scss';
import '../../../common/common.scss'
import { useState, useRef, useEffect } from 'react';
import{ useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage'
import { loginAdm } from '../../../api/loginadmApi'



 export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();
  const ref= useRef();

 


   async function entrarClick() {
    ref.current.continuousStart()
    setCarregando(true);

    try{
      const asnwer = await loginAdm(email,senha);
      storage('ADM-logado', asnwer);
      console.log(storage('ADM-logado'))
      console.log(asnwer);
      navigate('/homeadm');
      
    } catch(err) {
      ref.current.complete();
      setCarregando(false);
      if (err.response.status === 404) {
        setErro(err.response.data.erro)
      }

    }
    
  }

  
  useEffect(() => {
    if(storage('adm-logado')) {
      navigate('/homeadm');
    }
})

  return (
    <section className='pagina-login'>
       <LoadingBar color='rgba(174, 78, 219, 1)' ref={ref} />
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

        </div>
        </div>
        <div className='descricao'><p>OLÁ ADMINISTRADOR, LOGUE PARA ACESSAR AS FUNCIONALIDADES DO SITEMA.</p></div>
       </div>

       <div className='botoes'>

        <div className='b1'><button className='primeiro  salvar-botao' onClick={entrarClick} disabled={carregando} >ENTRAR</button></div>
        <div>{erro}</div>
       </div>
     

      </div>
      </div>
    </section>
    </section>
    );
  }
  
 