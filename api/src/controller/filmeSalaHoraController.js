import { Router } from 'express';
import { odeioFilmes } from '../repository/filmeSalaHoraRepository.js';
const server = Router();

server.get('/plusfilme', async (req, resp) =>{
    try{
        const resposta = await odeioFilmes();
        resp.send(resposta);
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
} )


export default server;
