import { Router } from 'express';
import { todasSalas } from '../repository/salaRepository.js';
const server = Router();

server.get('/adm/sala',async (req, resp) =>{
    try{
        const resposta = await todasSalas();
        resp.send(resposta);
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
})

export default server;