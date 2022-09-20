import { Router } from 'express';
import { consultaGenero } from '../repository/generoRepository.js';
const server = Router();


server.get('/genero',async (req, resp) =>{
    try{
    const resposta = await consultaGenero();
    resp.send(resposta);
    }catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }
})



export default server;