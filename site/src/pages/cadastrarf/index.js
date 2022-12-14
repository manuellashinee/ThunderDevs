import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react'
import {consultarFranquias} from '../../api/franquiaApi.js'
import {consultarGeneros} from '../../api/generoApi.js'
import { alterarFilme, confirmarFilme, enviarImagemFilme, buscarFilmePorId, buscarImagem } from '../../api/filmeapi'
import storage from 'local-storage'
import { useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
    const [situacao, setSituacao] = useState("ATIVO");
    const [imagem, setImagem] = useState();
    const [idfilme, setIdFilme] = useState(0);
    const {idParam} = useParams();
    const [adm, setAdm] = useState();
    const navigate = useNavigate();

    async function carregarFilme(){
        const [resposta] = await buscarFilmePorId(Number(idParam));
        setIdFranquias(resposta.franquia);
        setIdGeneros(resposta.genero);
        setNome(resposta.nome);
        setDuracao(resposta.duracao);
        setClassificacao(resposta.classificacao);
        setLancamento(resposta.lancamento.substr(0, 10));
        setAtor(resposta.ator);
        setTomato(resposta.tomato);
        setAudience(resposta.audiencia);
        setSinopse(resposta.sinopse);
        setDiretor(resposta.diretor);
        setAvaliacao(resposta.avaliacao);
        setDestaque(resposta.destaque);
        setSituacao(resposta.situacao);

        setImagem(resposta.capa);
        setIdFilme(resposta.id);

    }


    async function carregarFranquias(){
        const r = await consultarFranquias();
        setFranquias(r);
    }

    async function carregarGeneros(){
        const r = await consultarGeneros();
        setGeneros(r);
    }

    
    useEffect(() => {
        if(idParam !=0 ) {
        carregarFilme();
        }}, [])


    async function SalvarFilme(){
        try{

            if (!imagem) throw new Error('Escolha a imagem do filme.');
            if (!nome ) throw new Error('O campo nome ?? obrigat??rio.');
            if (!idgenero) throw new Error('O campo g??nero ?? obrigat??rio.');
            if (!idfraquia) throw new Error('O campo franquia ?? obrigat??rio.');
            if (!ator )throw new Error('O campo do ator ?? obrigat??rio.');
            if (!sinopse) throw new Error('O campo sinopse ?? obrigat??rio.');
            if (isNaN (classificacao)) throw new Error('O campo classifica????o ?? obrigat??rio.');
            if (isNaN (duracao)) throw new Error('O campo dura????o ?? obrigat??rio.');
            if (!lancamento) throw new Error('O campo lan??amento ?? obrigat??rio.');
            if (!diretor) throw new Error('O campo diretor ?? obrigat??rio.');
            if (!situacao) throw new Error('O campo situa????o ?? obrigat??rio.');
            

        
        if(idfilme === 0 ){
        const resposta = await confirmarFilme(Number(idfraquia),Number(idgenero),nome,Number(duracao),Number(classificacao),lancamento,ator,Number(tomato),Number(audience),sinopse,diretor,Number(avaliacao),destaque,situacao);
        const filme = await enviarImagemFilme(imagem, resposta.id);
        setIdFilme(resposta.idfilme);
        toast.success('filme cadastrado com sucesso');
        }
        else{
            const resposta = await alterarFilme( Number(idfraquia),Number(idgenero),nome,Number(duracao),Number(classificacao),lancamento,ator,Number(tomato),Number(audience),sinopse,diretor,Number(avaliacao),destaque,situacao, idfilme);
            if (typeof (imagem) == 'object')
            await enviarImagemFilme(imagem,idfilme);
            toast.success('filme alterado com sucesso');
        }
        
        
        
    }catch(err){
        
        toast.error(err.message);
    }}


   
    useEffect(() => {
        carregarFranquias();
        carregarGeneros();
    }, [])

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        if(typeof(imagem) == 'object'){
        return URL.createObjectURL(imagem); }
        else {
            return buscarImagem(imagem);
        }
    }

    useEffect(() => {
        if(!storage('ADM-logado')){
            navigate('/homeadm');
        }
        else{
          const AdmLogado = storage('ADM-logado');
          setAdm(AdmLogado);
        }
    }, [])

    return (
        <section className='pagina-cadastro'>
             <ToastContainer />
        <div className='cadastrar-page'>
            <div className='logo-botoes'>
                <img className='logo' src='../images/logo.svg' />
                <div className='voltar-botao'>
                    <Link to='/homeadm'><img className='flecha' src='../images/flecha.svg' /></Link>
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
                        <p className='campos' >DURA????O:</p>
                        <input className='input-linha' type='text' value= {duracao} onChange={e=> setDuracao(e.target.value)}/>
                        <p className='campos' >ATOR PRINCIPAL:</p>
                        <input className='input-linha' type='text' value= {ator} onChange={e=> setAtor(e.target.value)}/>
                        <p className='campos' >DIRETOR:</p>
                        <input className='input-linha' type='text' value= {diretor} onChange={e=> setDiretor(e.target.value)}/>
                        <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p className='campos'>GEN??RO:</p>
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
                <p className='campos'>CLASSIFICA????O:</p>
                <input className='input-linha' type='text' value= {classificacao} onChange={e=> setClassificacao(e.target.value)}/>
                <p className='campos'>DATA DE LAN??AMENTO:</p>
                <input className='input-linha' type="date" value= {lancamento} onChange={e=> setLancamento(e.target.value)}/>
                <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p className='campos'>TOMATO METER</p>
                                <input className='input-linha' type='text' placeholder='CAMPO N??O OBRIGAT??RIO' value= {tomato} onChange={e=> setTomato(e.target.value)}/>
                            </div>
                            <div className='coluna1'>
                                <p className='campos'>AUDIENCE SCORE</p>
                                <input value= {audience} onChange={e=> setAudience(e.target.value)}className='input-linha' type='text' placeholder='CAMPO N??O OBRIGAT??RIO'/>
                            </div>
                        </div>
                        <div className='coluna-2-campos'>
                            <p className='campos'>DESTAQUE:</p>
                            <input className='input-linha checkbox' type='checkbox' checked= {destaque} onChange={e=> setDestaque(e.target.checked)} />
                            <p className='campos'>SITUA????O:</p>
                            <select className='campos  input-linhas' value= {situacao} onChange={e=> setSituacao(e.target.value)}> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option value="ATIVO" >ATIVO</option>
                                    <option value="INATIVO">INATIVO</option>
                            </select>
                        </div>
                    </div>
                    <div className='coluna2'>
                        <p className='campos'>SINOPSE:</p>
                        <textarea className='input-linha2' type='text' value= {sinopse} onChange={e=> setSinopse(e.target.value)}/>
                        
                        
                        <p className='campos'>IMAGEM:</p>
                        <div className= 'upload-capa' onClick={escolherImagem}>
                            {!imagem &&
                                <img className='image-capa' src='../images/icon.svg' alt='' />
                            }

                            {imagem &&
                                <img className='imagem-capa' src={mostrarImagem()} alt=''/>
                            }

                        <input className='input-linha2' type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])}/>
                        </div>
                       
                        
                        <p className='campos'>AVALIA????O:</p>
                        <input className='input-linha' type='text' placeholder='CAMPO N??O OBRIGAT??RIO' value= {avaliacao} onChange={e=> setAvaliacao(e.target.value)}/>
                    </div>
                </div>

                </div>
           
            </div>
        </div>
        </section>
    );
}