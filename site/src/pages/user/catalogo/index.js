import './index.scss';
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import FilmeC from '../../components/filmesc';
import { FiltrarFilmeFranquia, FiltrarFilmeGenero, vizualizarTFilmes } from '../../../api/filmeapi';
import { useState, useEffect } from 'react';
import { consultarFranquias } from '../../../api/franquiaApi';
import { consultarGeneros } from '../../../api/generoApi';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import Carrossel from '../../components/carrossel';
import Rodape from '../../components/rodape';

export default function Catalogo() {
  const [filmes, setFilmes] = useState([]);
  const [filmesFranquia, setFilmesFranquia] = useState([]);
  const [filmesGenero, setFilmesGenero] = useState([]);
  const [franquia, setFranquias] = useState([]);
  const [genero, setGeneros] = useState([]);
  const [idfraquia, setIdFranquias] = useState(1);
  const [idgenero, setIdGeneros] = useState(1);
  const [usuario, setUsuario] = useState('');
  const navigate = useNavigate();
 
  useEffect(() => {
      if(!storage('usuario-logado')){
          navigate('/');
      }
      else{
        const usuarioLogado = storage('usuario-logado');
        setUsuario(usuarioLogado.nome);
      }
  }, [])

  function sairClick(){
    storage.remove('usuario-logado');
    navigate('/')
  }

  async function afilmes() {
    const resp = await vizualizarTFilmes();
    setFilmes(resp);
  }



  async function carregarFranquias() {
    const resp = await consultarFranquias();
    setFranquias(resp);
  }

  async function carregarGeneros() {
    const resp = await consultarGeneros();
    setGeneros(resp);
  }

  async function fFilmes(){
    const resp = await FiltrarFilmeFranquia(idfraquia);
    setFilmesFranquia(resp);
    console.log(resp)
  }

  
  async function gFilmes(){
    const resp = await FiltrarFilmeGenero(idgenero);;
    setFilmesGenero(resp);
    console.log(resp)
  }

  useEffect(() => {
    afilmes();
    carregarFranquias();
    carregarGeneros();
  }, [])

  useEffect(() => {
    fFilmes();
  }, [idfraquia])

  useEffect(() => {
    gFilmes();
  }, [idgenero])

  return (
    <section className='catalogo-page'>
      <div className='img-navegar-page'>
        <div className='navegacao'>
          <img className='icon-persona' src='../images/popcorn.png' />
          <p className='texto-catalogo'> {usuario}</p>

          <div className='icons-c'>
            <Link to='/home' className='icon-c'><img src='../images/Burger.svg' /></Link>
            <hr className='linhas-c' />
            <Link to='/home' className='icon-c'><img src='../images/shopping_cart.svg' /></Link>
            <hr className='linhas-c' />
            <Link to='/' className='icon-c'><img src='../images/Login.png'  onClick={sairClick} /></Link>

          </div>
          <hr className='linhas-c' />
        </div>

        <div className='cabecalho-pesquisa'>
          <div>
            <img className='logo' src='../images/logo.svg' />
            <p className='bem-vindes'>BEM VINDES AO NOSSO CATÁLOGO</p>
          </div>

          <div className='pesquisa-input'>
            <input className='pesquisa-design' type='text' />
            <button className='pesquisar-icon'><img className='img-pesquisa' src='../images/pesquisar.svg' /></button>
          </div>
        </div>
      </div>

      <div className='texto-select'>
          <p className='texto-catalogo'>FILMES DIVERSOS</p>

        </div>

        <div className='cards-filmes'>

          {filmes.map(item=>
            <FilmeC item= {item} />
          )}
        </div>

      <hr />
      <div className='pagina-baixo'>

        <div className='texto-select'>
          <p className='texto-catalogo'>FILMES POR GÊNERO</p>

          <select className='campos input-linhas' value={idgenero} onChange={e => setIdGeneros(e.target.value)}>
            {genero.map(item=>
              <option value={item.idgenero}>{item.Nome}</option>
            )}
          </select>
        </div>

        <div className='cards-filmes'>
          {filmesGenero.map(item=> 
          <FilmeC item={item} />
          )}
        </div>
        <hr></hr>
        <div className='pagina-baixo'>

        <div className='texto-select'>
          <p className='texto-catalogo'>FILMES POR FRANQUIA</p>

          <select className='campos input-linhas' value ={idfraquia} onChange={e => setIdFranquias(e.target.value)}>
            {franquia.map(item =>
              <option value={item.idfranquia}>{item.Nome}</option>
            )}
          </select>
        </div>

        <div className='cards-filmes'>
          {filmesFranquia.map(item =>
          <FilmeC item= {item} /> )}
        </div>
      </div>
        
      </div>
      <Rodape/>
    </section>
  );
}