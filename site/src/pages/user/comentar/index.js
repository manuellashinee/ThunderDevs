import './index.scss'


export default function Comentar() {

    return (
        <section className='comentar-page'>
            <div><img className='logo' src='../images/logo.svg'/></div>

         <div className='centerzinho'>
            <div className='quadro'>
                <div className='coment-titulo'>
                    <div><img src='../images/flecha.svg'/></div>
                    <div className='titulo-center'><h1>COMENTAR</h1></div>
                </div>

                <div className='inferno'>
                <div className='estrela'>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                        <img src='../images/Star.svg'/>
                    </div>
                    <div  className='estrela'><p>COMENTE:</p></div>
                    

                    <div><input className='opacidade'></input></div>
                </div>

                <div className='center-button'>
                    <button className='purple'>FINALIZAR</button>
                </div>


            </div>
         </div>

           
        </section>
    )
}