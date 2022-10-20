import './index.scss'
import '../../../common/common.scss'
import { useState, useEffect} from 'react'
import {cadastrarUsuario} from '../../../api/cadastrarUsu.js'

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
          
       
          if(senha !=senha2)
          throw new Error('As senhas devem ser iguais')

      {/*const usuario = storage('usuario-logado');*/}

       const resposta = await cadastrarUsuario(nome,email,senha,nascimento,telefone, cpf, rg);
      
       alert('Usuario cadastrado com sucesso!');
      }
      catch(err){
          console.log(err);
          {/*toast(err.message);*/}
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
          <div><input className='can' type='date'/>
          </div>
        </div>

        <div className='squad1'>
          <div> <p className='titulo-1'>CPF:</p></div>
          <div><input className='can'/></div>
        </div>
        
        <div className='squad1'>
          <div> <p className='titulo-1'>RG:</p></div>
          <div><input className='can'/></div>
        </div>
        
        
        <div className='squad1'>
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