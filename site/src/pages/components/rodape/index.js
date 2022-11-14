import './index.scss'
import '../../../common/common.scss'
import { Link } from 'react-router-dom';
export default function Rodape(){

return(

<div className='rodape'>

<div className='redeS'>

    <div className='logoo'>
    <img className='popcorn' src='../images/logo.svg'/>
    <h2>SIGA NOSSAS REDES SOCIAS:</h2>
    </div>

    <div className='sociais'>
        <div>
            <img src='../images/insta/Solid/Brands/Instagram.svg'/>
        </div>
        
        <div>
            <img src='../images/face/Solid/Brands/Facebook.svg'/>
        </div>

        <div>
            <img src='../images/Solid/Brands/Twitter.svg'/>
        </div>

    </div>
</div>

<div className='filme' >
    <div><h1>FILMES</h1></div>
    
    <div className='desc'>
    <div className='espaco'>Programação</div>
   <Link to='/emcartaz'><div className='espaco  cor-branca'>Em Cartaz</div></Link>
    <div className='espaco'>Em Breve</div>
    <div className='espaco'>Ingressos</div>
    </div>
</div>

<div className='snack'>
   <div> <h1>SNACK BAR</h1></div>

    <div className='desc'>
   <Link to='/snackbar'><div className='espaco  cor-branca'>Cardápio Snack Bar</div></Link>
    <div className='espaco'>Cardápios Prime</div>
    </div>
</div>

<div className='salas'>
    <div> <h1>SALAS</h1></div>
   
   <div className='desc'>
   <Link to='/assentos'><div className='espaco  cor-branca'>3D</div></Link>
   <Link to='/assentos'><div className='espaco  cor-branca'>XD</div></Link>  
   <Link to='/assentos'><div className='espaco  cor-branca'>2D</div></Link>   
   
   </div>

</div>

<div className='contatos'>
     <div> <h1>CONTATOS</h1></div>

    <div className='desc'>
        <div className='espaco'>contato@2022popcorntime@email.com</div>
    </div>

</div>

</div>
);
}