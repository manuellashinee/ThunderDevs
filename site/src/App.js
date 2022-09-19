import './App.scss';
import '../src/common/common.scss'

function App() {
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
          <div><input className='can'/></div>
        </div>
        <div className='squad2'>
          <div> <p className='titulo-1'>SENHA:</p></div>
          <div><input className='can'/></div>
        </div>
        </div>
        <div className='descricao'><p>FAÇA SEU LOGIN PARA TER ACESSO AO NOSSO CATÁLOGO IMPERDÍVEL, NOSSO PLANO CINEMA, BONÛS E OFERTAS UNICOS!</p></div>
       </div>

       <div className='botoes'>

        <div className='b1'><button className='primeiro  salvar-botao'>ENTRAR</button></div>

        <div className='b2'><button className='primeiro salvar-botao'>CADASTRE-SE</button></div>
       </div>


      </div>
      </div>
    </section>
    </section>
  );
}

export default App;
