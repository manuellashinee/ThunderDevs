import './index.scss';

export default function MeusCombos(props) {



    return (
        <section className="my-combos">

            <div className='borda'>


                <div className='alinhamento'>

                    <div>
                        <img className='img-combo' src={props.capa} />
                    </div>

                    <div className='descricao'>

                        <div className='titulo'>
                            <h1>{props.nome}</h1>
                        </div>

                        <div className='padrao'>
                            <div>
                                <h2>NOME DE USUÁRIO:</h2>
                            </div>
                            <div className='remover'>
                                <div className='desc'>
                                    <label className='usuario'>{props.usuario}</label>
                                </div>

                            </div>
                        </div>

                        <div className='padrao'>
                            <div>
                                <h2>FORMA DE PAGAMENTO:</h2>
                            </div>

                            <div className='desc'>
                                <label className='pagamento'>{props.formaPagamento} </label>
                            </div>

                        </div>

                        <div className='padrao'>
                            <div>
                                <h2>DESCRIÇÃO DO COMBO:</h2>
                            </div>
                            <div className='desc'>
                                <label className='descricao-combo'>{props.descricao}</label>
                            </div>
                        </div>

                        <div className='situa'>

                            <div className='padrao stop '>
                                <div>
                                    <h1>TOTAL A PAGAR:</h1>
                                </div>

                                <div className='desc'>
                                    <label className='total'>{props.total}</label>
                                </div>
                            </div>

                            <div className='padrao '>
                                <div>
                                    <h1>SITUAÇÃO:<span className='verde'>DISPONÍVEL</span></h1>
                                </div>
                                <div>
                                    <h1>SITUAÇÃO:<span className='vermelho'>EXPIRADO</span></h1>
                                </div>

                                <div className='desc'>
                                    <label className='total'>{props.situaçaõ}</label>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img className='situ' src='../images/circle-x.svg' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}