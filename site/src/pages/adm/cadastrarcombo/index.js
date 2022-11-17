import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { confirmarCombo, enviarImagemCombo, alterarCombo, buscarImagem, buscarPorId} from '../../../api/comboapi.js';
import { useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Cadastrarcombo(){
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState();
    const [idcombo, setIdCombo] = useState(0);
    const [imagem, setImagem] = useState();
    const {idParam} = useParams();

    async function SalvarCombo(){
        try{
           

            if (!imagem) throw new Error('Escolha a imagem do combo.');
            if (!nome ) throw new Error('O campo nome é obrigatório.');
            if (isNaN (preco)) throw new Error('O campo preço é obrigatório.');
            if (!descricao) throw new Error('O campo descrição é obrigatório.');


            if(idcombo === 0 ){
                const resposta = await confirmarCombo(nome,descricao,preco);
                const combo = await enviarImagemCombo(imagem, resposta.id);
                setIdCombo(resposta.idcombo);
                toast.success('Combo cadastrado com sucesso');
            }
            else{
                const resposta = await alterarCombo(nome, descricao, Number(preco), idcombo);
                 if (typeof (imagem) == 'object')
                 await enviarImagemCombo(imagem, idcombo);
                 toast.success('Combo alterado com sucesso');
             }
        }catch(err){
            toast.error(err.message);
    }
    }
    function escolherImagemcombo() {
        document.getElementById('imagemcapaCombo').click();
    }

    function mostrarImagemcombo() {
        if(typeof(imagem) == 'object'){
        return URL.createObjectURL(imagem); }
        else {
            return buscarImagem(imagem);
        }
    }

    async function carregarCombo(){
        const resposta = await buscarPorId(Number(idParam));
        setDescricao(resposta.descricao);
        setPreco(resposta.preco);
        setNome(resposta.nome);
        setImagem(resposta.foto);
        setIdCombo(resposta.idcombo);

    }

    useEffect(() => {
        if(idParam !=0 ) {
        carregarCombo();
        }}, [])

    return(
        <section className='pagina-cadastro-c'>
              <ToastContainer />
        <div className='cadastrar-page'>
            <div className='logo-botoes'>
                <img className='logo' src='../images/logo.svg' />
                <div className='voltar-botao'>
                    <Link to='/homeadm'><img className='flecha' src='../images/flecha.svg' /></Link>
                    <Link to='/snacks'><button className='salvar-botao'>COMBOS REGISTRADOS</button></Link>
                    <Link to='/pedidosnack'><button className='salvar-botao'>PEDIDOS SNACK</button></Link>
                </div>
                
            </div>

            <div className='container'>
                <div className='centro'>
                <p className='c-titulo'>CADASTRAR COMBO - SNACK BAR</p>
                <div className='colunas'>
                    <div className='coluna1'>
                        <p className='campos' >NOME DO COMBO:</p>
                        <input className='input-linha  input-deco' type='text' value={nome} onChange={e=> setNome(e.target.value)}/>
                        <p className='campos' >DESCRIÇÃO DO COMBO:</p>
                        <input className='input-linha  input-deco' type='text'value={descricao}  onChange={e=> setDescricao(e.target.value)}  />
                        <p className='campos' >PREÇO:</p>
                        <input className='input-linha  input-deco' type='text' value={preco} onChange={e=> setPreco(e.target.value)}/>
                      </div>
                    <div className='coluna2'>
                      
                        <p className='campos'>IMAGEM:</p>
                        <div className='upload-capa-combo' onClick={escolherImagemcombo} >
                        {!imagem && 
                         <img className='image-capa-combo' src='../images/icon.svg' alt='' />
                         }

                        {imagem && 
                        <img className='imagem-capa-combo' src={mostrarImagemcombo()} alt=''/>
                        }
                        <input className='input-linha2' type='file' id='imagemcapaCombo' onChange={e => setImagem(e.target.files[0])} />
                    </div>
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