import './index.scss'
import '../../common/common.scss'
import { useState, useEffect} from 'react'
import {consultarFranquias} from '../../api/franquiaApi.js'
import {consultarGeneros} from '../../api/generoApi.js'
import { confirmarFilme } from '../../api/filmeapi'

export default function Cadastrar(){
    const [fraquias, setFranquias] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [idfraquia, setIdFranquias] = useState();
    const [idgenero, setIdGeneros] = useState();
    const [nome, setNome] = useState("");
    const [duracao, setDuracao] = useState();
    const [classificacao, setClassificacao] = useState();
    const [lancamento, setLancamento] = useState();
    const [ator, setAtor] = useState("");
    const [tomato, setTomato] = useState();
    const [audience, setAudience] = useState();
    const [sinopse, setSinopse] = useState("");
    const [diretor, setDiretor] = useState("");
    const [avaliacao, setAvaliacao] = useState();
    const [destaque, setDestaque] = useState(false);
    const [situacao, setSituacao] = useState("");
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);
   


    async function carregarFranquias(){
        const r = await consultarFranquias();
        setFranquias(r);
    }

    async function carregarGeneros(){
        const r = await consultarGeneros();
        setGeneros(r);
    }

    async function SalvarFilme(){
        try{
        const r = await confirmarFilme(idfraquia,idgenero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao);
        alert('filme bem cadastrado')
    
    }catch(err){
        
        console.log(err.message)
        alert('filme não cadastrado')
    }
}

   
    useEffect(() => {
        carregarFranquias();
        carregarGeneros();
    }, [])


    return (
        <section className='pagina-cadastro'>
        <div className='cadastrar-page'>
            <div className='logo-botoes'>
                <img className='logo' src='../images/logo.svg' />
                <div className='voltar-botao'>
                    <img className='flecha' src='../images/flecha.svg' />
                    <button className='salvar-botao' onClick={SalvarFilme}>SALVAR</button>
                </div>
            </div>

            <div className='container'>
                <div className='centro'>
                <p className='c-titulo'>CADASTRAR FILME:</p>
                <div className='colunas'>
                    <div className='coluna1'>
                        <p className='campos' >NOME:</p>
                        <input className='input-linha' type='text' value= {nome} onChange={e=> setNome(e.target.value)}/>
                        <p className='campos' >DURAÇÃO:</p>
                        <input className='input-linha' type='text' value= {duracao} onChange={e=> setDuracao(Number(e.target.value))}/>
                        <p className='campos' >ATOR PRINCIPAL:</p>
                        <input className='input-linha' type='text' value= {ator} onChange={e=> setAtor(e.target.value)}/>
                        <p className='campos' >DIRETOR:</p>
                        <input className='input-linha' type='text' value= {diretor} onChange={e=> setDiretor(e.target.value)}/>
                        <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p className='campos'>GENÊRO:</p>
                                <select className='campos input-linhas' value ={idgenero} onChange={e => setIdGeneros(e.target.value)}> 
                                    <option disabled selected hidden> Selecione</option>
                                    {generos.map(item =>
                                        <option value={item.idgenero}> {item.Nome} </option>)}
                                </select>
                            </div>
                            <div className='coluna1'>
                                <p className='campos'>FRANQUIA:</p>
                                <select  className='campos input-linhas' value ={idfraquia} onChange={e => setIdFranquias(e.target.value)} > 
                                    <option disabled selected hidden> Selecione</option>
                                    {fraquias.map(item =>
                                        <option value={item.idfranquia}> {item.Nome} </option>)}
                                </select>
                            </div>
                        </div>
                <p className='campos'>CLASSIFICAÇÃO:</p>
                <input className='input-linha' type='text' value= {classificacao} onChange={e=> setClassificacao(Number(e.target.value))}/>
                <p className='campos'>DATA DE LANÇAMENTO:</p>
                <input className='input-linha' type="date" value= {lancamento} onChange={e=> setLancamento(e.target.value)}/>
                <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p className='campos'>TOMATO METER</p>
                                <input className='input-linha' type='text' placeholder='CAMPO NÃO OBRIGATÓRIO' value= {tomato} onChange={e=> setTomato(e.target.value)}/>
                            </div>
                            <div className='coluna1'>
                                <p className='campos'>AUDIENCE SCORE</p>
                                <input value= {audience} onChange={e=> setAudience(e.target.value)}className='input-linha' type='text' placeholder='CAMPO NÃO OBRIGATÓRIO'/>
                            </div>
                        </div>
                        <div className='coluna-2-campos'>
                            <p className='campos'>DESTAQUE:</p>
                            <input className='input-linha checkbox' type='checkbox' checked= {destaque} onChange={e=> setDestaque(e.target.checked)} />
                            <p className='campos'>SITUAÇÃO:</p>
                            <select className='campos  input-linhas' value= {situacao} onChange={e=> setSituacao(e.target.value)}> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option>ATIVO</option>
                                    <option>INATIVO</option>
                            </select>
                        </div>
                    </div>
                    <div className='coluna2'>
                        <p className='campos'>SINOPSE:</p>
                        <input  className='input-linha2' type='text' value= {sinopse} onChange={e=> setSinopse(e.target.value)}/>
                        <p className='campos'>IMAGEM:</p>
                        <input className='input-linha2' type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])}/>
                        <p className='campos'>AVALIAÇÃO:</p>
                        <input className='input-linha' type='text' placeholder='CAMPO NÃO OBRIGATÓRIO' value= {avaliacao} onChange={e=> setAvaliacao(Number(e.target.value))}/>
                    </div>
                </div>

                </div>
           
            </div>
        </div>
        </section>
    );
}