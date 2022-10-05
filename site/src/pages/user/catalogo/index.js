import './index.scss';
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
import FilmeC from '../../components/filmesc';
import { FiltrarFilmeFranquia, FiltrarFilmeGenero, vizualizarTFilmes } from '../../../api/filmeapi';
import { useState, useEffect } from 'react';
import { consultarFranquias } from '../../../api/franquiaApi';
import { consultarGeneros } from '../../../api/generoApi';

export default function Catalogo() {
  const [filmes, setFilmes] = useState([]);
  const [filmesFranquia, setFilmesFranquia] = useState();
  const [filmesGenero, setFilmesGenero] = useState();
  const [franquia, setFranquias] = useState([]);
  const [genero, setGeneros] = useState([]);
  const [idfraquia, setIdFranquias] = useState();
  const [idgenero, setIdGeneros] = useState();
  


  async function afilmes() {
    const resp = await vizualizarTFilmes();
    console.log('asdfasdfasdf');
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
  }

  
  async function gFilmes(){
    const resp = await FiltrarFilmeGenero(idgenero);;
    setFilmesGenero(resp);
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
          <p className='texto-catalogo'>juliana</p>

          <div className='icons-c'>
            <Link to='/home' className='icon-c'><img src='../images/Burger.svg' /></Link>
            <hr className='linhas-c' />
            <Link to='/home' className='icon-c'><img src='../images/shopping_cart.svg' /></Link>
            <hr className='linhas-c' />
            <Link to='/home' className='icon-c'><img src='../images/Login.png' /></Link>
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

      <div className='pagina-baixo'>

        <div className='texto-select'>
          <p className='texto-catalogo'>FILMES POR FRANQUIA</p>

          <select className='campos input-linhas' value ={idfraquia} onChange={e => setIdFranquias(e.target.value)}>
            <option disabled selected hidden> Selecione a categoria </option>
            {franquia.map(item =>
              <option value={item.idfranquia}>{item.Nome}</option>
            )}
          </select>
        </div>

        <div className='cards-filmes'>
          {/* <FilmeC imagem='../images/filmeruim.png' titulo='THOR AMOR E TROVÃO' data='15/12/2022' />
          <FilmeC imagem='../images/amizade.jpg' titulo='NARUTO E SASUKE' data='15/12/2022' />
          <FilmeC imagem='../images/img-interessante.jpg' titulo='EVANGELION' data='15/12/2022' />
          <FilmeC imagem='../images/ticoeteco.jpg' titulo='TARTARUGAS NINJAS' data='15/12/2022' />
          <FilmeC imagem='../images/red.jpg' titulo='RED: CRESCER É UMA FERA' data='15/12/2022' /> */}
        </div>
      </div>

      <hr />
      <div className='pagina-baixo'>

        <div className='texto-select'>
          <p className='texto-catalogo'>FILMES POR GENÊRO</p>

          <select className='campos input-linhas' value={idgenero} onChange={e => setIdGeneros(e.target.value)}>
            <option disabled selected hidden> Selecione o Gênero </option>
            {genero.map(item=>
              <option value={item.idgenero}>{item.Nome}</option>
            )}
          </select>
        </div>

        <div className='cards-filmes'>
          {/* <FilmeC imagem='../images/filmeruim.png' titulo='THOR AMOR E TROVÃO' data='15/12/2022' />
          <FilmeC imagem='../images/amizade.jpg' titulo='NARUTO E SASUKE' data='15/12/2022' />
          <FilmeC imagem='../images/img-interessante.jpg' titulo='EVANGELION' data='15/12/2022' />
          <FilmeC imagem='../images/ticoeteco.jpg' titulo='TARTARUGAS NINJAS' data='15/12/2022' />
          <FilmeC imagem='../images/red.jpg' titulo='RED: CRESCER É UMA FERA' data='15/12/2022' /> */}
        </div>
        <hr></hr>
        <div className='texto-select'>
          <p className='texto-catalogo'>FILMES DIVERSOS</p>

        </div>

        <div className='cards-filmes'>

          {filmes.map(item=>
            <FilmeC item= {item} />
          )}
        </div>
      </div>

    </section>
  );
}