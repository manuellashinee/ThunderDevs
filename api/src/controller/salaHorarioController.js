import { Router } from 'express';
import { horarioSala } from '../repository/salaHorarioRepository';
const server = Router();

server.get('/sala/horario/:idsala',async (req, resp) =>{
    try{
        const idsala= req.params.idsala;
        const resposta = await horarioSala(idsala);
        resp.send(resposta);
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
})

export default server;