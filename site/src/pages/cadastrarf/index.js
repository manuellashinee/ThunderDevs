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
            <p>CADASTRAR FILME:</p>
                <div className='colunas'>
                    <div className='coluna1'>
                        <p>NOME:</p>
                        <input type='text'/>
                        <p>DURAÇÃO:</p>
                        <input type='text'/>
                        <p>ATOR PRINCIPAL:</p>
                        <input type='text'/>
                        <p>DIRETOR:</p>
                        <input type='text'/>
                        <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p>GENÊRO:</p>
                                <select> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option>COMÉDIA</option>
                                </select>
                            </div>
                            <div className='coluna1'>
                                <p>FRANQUIA:</p>
                                <select> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option>MARVEL STUDIOS</option>
                                    <option>DC COMICS</option>
                                    <option>DREAM WORKS</option>
                                </select>
                            </div>
                        </div>
                <p>CLASSIFICAÇÃO:</p>
                <input type='text'/>
                <p>DATA DE LANÇAMENTO:</p>
                <input type="date"/>
                <div className='coluna-2-campos'>
                            <div className='coluna1'>
                                <p>TOMATO METER</p>
                                <input type='text' placeholder='CAMPO NÃO OBRIGATÓRIO'/>
                            </div>
                            <div className='coluna1'>
                                <p>AUDIENCE SCORE</p>
                                <input type='text' placeholder='CAMPO NÃO OBRIGATÓRIO'/>
                            </div>
                        </div>
                        <div className='coluna-2-campos'>
                            <p>DESTAQUE:</p>
                            <input type='checkbox' />
                            <p>SITUAÇÃO:</p>
                            <select> 
                                    <option disabled selected hidden> Selecione</option>
                                    <option>ATIVO</option>
                                    <option>INATIVO</option>
                            </select>
                        </div>
                    </div>
                    <div className='coluna2'>
                        <p>SINOPSE:</p>
                        <input type='text'/>
                        <p>IMAGEM:</p>
                        <input type='file'/>
                        <p>AVALIAÇÃO:</p>
                        <input type='text' placeholder='CAMPO NÃO OBRIGATÓRIO'/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}