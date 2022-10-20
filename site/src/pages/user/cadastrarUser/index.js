import './index.scss'
import '../../../common/common.scss'
import { useState, useEffect} from 'react'
import {cadastrarUsuario} from '../../../api/cadastrarUsu.js'
import storage from 'local-storage'

export default function CadastrarUser() {
    const [nome, setNome]= useState('');
    const [telefone, setTelefone]= useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');
    const [senha2, setSenha2]= useState('');
    const [nascimento, setNascimento]= useState('');
    const [cpf, setCpf]= useState('');
    const [rg, setRg]= useState('');
   

    async function salvarClick () {
      try{
          
       const usuario = storage('usuario-logado');
       const resposta = await cadastrarUsuario(usuario, nome,telefone,email,senha,nascimento, cpf, rg);
      
       alert('Usuario cadastrado com sucesso!');
      }
      catch(err){
          console.log(err);
          alert(err.message);
      }
     }

   

    return(
      <section className='pagina-cadastro2'>
      <section className='container'>
      <div className='la'>
        <div>
        <img className='logo' src='../images/logo.svg'/>
        </div>
        <div>
          <img className='flecha' src='../images/Arrow 1.svg'/>
        </div>
      </div>
      <div className='a'>
      <div className='quadro'>

      <div><h1 className='tituluzinho'>CADASTRE-SE:</h1></div>
        
        

       <div className='she'>
    
       <div className='harry coluna1'>
        <div className='squad1'>
          <div> <p className='titulo-1' >NOME:</p></div>
          <div>
            <input className='can'  type='text'  value={nome} onChange={ e => setNome(e.target.value)}/></div>
        </div>

        <div className='squad1'>
          <div> <p className='titulo-1'>TELEFONE:</p></div>
          <div>
            <input className='can'  type='text'  value={telefone} onChange={ e => setTelefone(e.target.value)}/></div>
        </div>

        <div className='squad1'>
          <div> <p className='titulo-1'>E-MAIL:</p></div>
          <div>
            <input className='can'  type='text'  value={email} onChange={ e => setEmail(e.target.value)}/></div>
        </div>
        
        <div className='squad2'>
          <div> <p className='titulo-1' >SENHA:</p></div>
          <div>
            <input type='password' className='can'  value={senha} onChange={ e => setSenha(e.target.value)}/></div>
        </div>
        </div>

        <div className='harry coluna2'>
        <div className='squad1'>
          <div> <p className='titulo-1'>DATA DE NASCIMENTO:</p></div>
          <div>
            <input className='can' type='date'  value={nascimento} onChange={ e => setNascimento(e.target.value)}/>
          </div>
        </div>

        <div className='squad1'>
          <div> <p className='titulo-1'>CPF:</p></div>
          <div>
            <input className='can'  type='text'  value={cpf} onChange={ e => setCpf(e.target.value)}/></div>
        </div>
        
        <div className='squad1'>
          <div> <p className='titulo-1'>RG:</p></div>
          <div>
            <input className='can'  type='text'  value={rg} onChange={ e => setRg(e.target.value)}/></div>
        </div>
        
        
        <div className='squad1'>
          <div> <p className='titulo-1'>CONFIRME SUA SENHA:</p></div>
          <div><input type='password' className='can'  value={senha2} onChange={ e => setSenha2(e.target.value)}/></div>
        </div>
        </div>

       </div>

        <div className='final'>
          <button className='fine-botao' onClick={salvarClick}>FINALIZAR</button>
        </div>


      </div>
      </div>
    </section>
  </section>

 );

}