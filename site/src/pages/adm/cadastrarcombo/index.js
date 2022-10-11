import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { confirmarCombo } from '../../../api/comboapi.js';

export default function Cadastrarcombo(){
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState();
    const [idcombo, setIdCombo] = useState(0);

    async function SalvarCombo(){
        try{
            if(idcombo === 0 ){
                const resposta = await confirmarCombo(nome,descricao,preco);
                setIdCombo(resposta.idcombo);
                console.log(idcombo)
                alert('combo cadastrado com sucesso');
            }
        }catch(err){
        alert.error(err.message);
    }
    }

    return(
        <section className='pagina-cadastro-c'>
        <div className='cadastrar-page'>
            <div className='logo-botoes'>
                <img className='logo' src='../images/logo.svg' />
                <div className='voltar-botao'>
                    <Link to='/homeadm'><img className='flecha' src='../images/flecha.svg' /></Link>
                    <button className='salvar-botao'>COMBOS REGISTRADOS</button>
                </div>
            </div>

            <div className='container'>
                <div className='centro'>
                <p className='c-titulo'>CADASTRAR COMBO - SNACK BAR</p>
                <div className='colunas'>
                    <div className='coluna1'>
                        <p className='campos' >NOME DO COMBO:</p>
                        <input className='input-linha' type='text' value={nome} onChange={e=> setNome(e.target.value)}/>
                        <p className='campos' >DESCRIÇÃO DO COMBO:</p>
                        <input className='input-linha' type='text'value={descricao}  onChange={e=> setDescricao(e.target.value)}  />
                        <p className='campos' >PREÇO:</p>
                        <input className='input-linha' type='text' value={preco} onChange={e=> setPreco(e.target.value)}/>
                      </div>
                    <div className='coluna2'>
                      
                        <p className='campos'>IMAGEM:</p>
                        <input className='input-linha2' type='file'/>
                    
                    </div>
                </div>
                <div className=''>
                <button className='salvar-botao' onClick={SalvarCombo} >SALVAR</button>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}