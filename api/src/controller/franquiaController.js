import { Router } from 'express';
import { consultaFranquia } from '../repository/franquiaRepository.js';
const server = Router();

server.get('/franquia',async (req, resp) =>{
    try{
    const resposta = await consultaFranquia();
    resp.send(resposta);
    }catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }
})


export default server;