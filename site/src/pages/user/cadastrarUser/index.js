import './index.scss'
import '../../../common/common.scss'
import { useState} from 'react'
import {cadastrarUsuario} from '../../../api/cadastrarUsu.js'
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

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

        if (!nome || !nome.trim()) throw new Error('O campo nome é obrigatório.');
        if (isNaN(telefone)|| !telefone.trim()) throw new Error('O campo telefone é obrigatório.');
        if (!email) throw new Error('O campo email é obrigatório.');
        if (!senha) throw new Error('O campo senha é obrigatório.');
        if (!senha2) throw new Error('Por favor confirme sua senha.');
        if (isNaN(cpf)|| !cpf.trim()) throw new Error('O CPF é obrigatório.');
        if (isNaN(rg)|| !rg.trim()) throw new Error('O rg é obrigatório.');
        if (!nascimento) throw new Error('O nascimento é obrigatório.');
        if(senha !=senha2)
        throw new Error('As senhas devem ser iguais')

       
          const usuario = storage('usuario-logado');
          const resposta = await cadastrarUsuario(nome,telefone, email, senha, nascimento, cpf, rg);
          toast.success('Usuario cadastrado com sucesso!');
      
          
     
      }
      catch(err){
          console.log(err);
          toast.error(err.message);
      }
     }

   

    return(
      <section className='pagina-cadastro2'>
         <ToastContainer />
      <section className='container'>
      <div className='la'>
        <div>
        <img className='logo' src='../images/logo.svg'/>
        </div>
        <div>
          <Link to='/'><img className='flecha' src='../images/Arrow 1.svg'/></Link>
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