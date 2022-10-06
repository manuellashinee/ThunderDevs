import '../../common/common.scss'
import './index.scss'
import { useState, useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import{ useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { loginUsu} from '../../api/loginApi'
import { Link } from 'react-router-dom';


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

          const asnwer = await loginUsu(email,senha);
          storage('usuario-logado', asnwer);
          console.log(storage('usuario-logado'))
          navigate('/catalogo')


    

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
    <LoadingBar color='rgba(254, 193, 138, 1)' ref={ref} />
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
        <div className='faixa'><h1>LOGIN</h1> <img src='../images/cortapra18.svg'/></div>
        </div>
        <div className='linha2'>
        <hr></hr>
        </div>
        <div className='log'><p className='login'>SE AINDA NÃO TEM LOGIN, CADASTRE-SE.</p></div>


       <div className='she'>
    
       <div className='harry'>
        <div className='squad1'>
          <div> <p className='titulo-1'>E-MAIL:</p></div>
          <div><input className='can' value={email}  onChange={e => setEmail(e.target.value) }/></div>
        </div>
        <div className='squad2'>
          <div> <p className='titulo-1' >SENHA:</p></div>
          <div><input type='password' className='can' value={senha}  onChange={e => setSenha(e.target.value) }/></div>
        </div>
        </div>
        <div className='descricao'><p>FAÇA SEU LOGIN PARA TER ACESSO AO NOSSO CATÁLOGO IMPERDÍVEL, NOSSO PLANO CINEMA, BONÛS E OFERTAS UNICOS!</p></div>
       </div>

       <div className='botoes'>

        <div className='b1'><button className='primeiro  salvar-botao' onClick={entrarClick} disabled={carregando}>ENTRAR</button></div>
        

        <div className='b2'><Link to='/cadastraruser' className='primeiro salvar-botao'>CADASTRE-SE</Link></div>
        <div>{erro}</div>
       </div>


      </div>
      
      </div>
    </section>
    </section>
  );
}


