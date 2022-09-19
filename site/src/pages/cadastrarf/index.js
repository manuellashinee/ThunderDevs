import './index.scss'
import '../../common/common.scss'

export default function Cadastrar(){
    return (
        <section className='pagina-cadastro'>
        <div className='cadastrar-page'>
            <div className='logo-botoes'>
                <img className='logo' src='../images/logo.svg' />
                <div className='voltar-botao'>
                    <img className='flecha' src='../images/flecha.svg' />
                    <button className='salvar-botao'>SALVAR</button>
                </div>
            </div>

            <div className='container'>
                <div className='centro'>
                <p className='c-titulo'>CADASTRAR FILME:</p>
                <div className='colunas'>
                    <div className='coluna1'>
                        <p className='campos'>NOME:</p>
                        <input className='input-linha' type='text'/>
                        <p className='campos'>DURAÇÃO:</p>
                        <input className='input-linha' type='text'/>
                        <p className='campos'>ATOR PRINCIPAL:</p>
                        <input className='input-linha' type='text'/>
                        <p className='campos'>DIRETOR:</p>
                        <input className='input-linha' type='text'/>
                        <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p className='campos'>GENÊRO:</p>
                                <select className='campos input-linhas'> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option>COMÉDIA</option>
                                </select>
                            </div>
                            <div className='coluna1'>
                                <p className='campos'>FRANQUIA:</p>
                                <select  className='campos input-linhas'> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option>MARVEL STUDIOS</option>
                                    <option>DC COMICS</option>
                                    <option>DREAM WORKS</option>
                                </select>
                            </div>
                        </div>
                <p className='campos'>CLASSIFICAÇÃO:</p>
                <input className='input-linha' type='text'/>
                <p className='campos'>DATA DE LANÇAMENTO:</p>
                <input className='input-linha' type="date"/>
                <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p className='campos'>TOMATO METER</p>
                                <input className='input-linha' type='text' placeholder='CAMPO NÃO OBRIGATÓRIO'/>
                            </div>
                            <div className='coluna1'>
                                <p className='campos'>AUDIENCE SCORE</p>
                                <input className='input-linha' type='text' placeholder='CAMPO NÃO OBRIGATÓRIO'/>
                            </div>
                        </div>
                        <div className='coluna-2-campos'>
                            <p className='campos'>DESTAQUE:</p>
                            <input className='input-linha checkbox' type='checkbox' />
                            <p className='campos'>SITUAÇÃO:</p>
                            <select className='campos  input-linhas'> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option>ATIVO</option>
                                    <option>INATIVO</option>
                            </select>
                        </div>
                    </div>
                    <div className='coluna2'>
                        <p className='campos'>SINOPSE:</p>
                        <input  className='input-linha2' type='text'/>
                        <p className='campos'>IMAGEM:</p>
                        <input className='input-linha2' type='file'/>
                        <p className='campos'>AVALIAÇÃO:</p>
                        <input className='input-linha' type='text' placeholder='CAMPO NÃO OBRIGATÓRIO'/>
                    </div>
                </div>

                </div>
           
            </div>
        </div>
        </section>
    );
}