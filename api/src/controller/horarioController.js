import { Router } from 'express';
import { todosHorarios } from '../repository/horarioRepository.js';
const server = Router();

server.get('/adm/horario',async (req, resp) =>{
    try{
        const resposta = await todosHorarios();
        resp.send(resposta);
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
})

export default server;