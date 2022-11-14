
import { Router } from 'express';
import { assentosOcupados, VerTassentos } from '../repository/assentoRepository.js';
const server = Router();

server.get('/pedido/assentos', async (req,resp)=>{
    try{
    const resposta = await VerTassentos();
    resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/ocupados/assentos', async (req,resp)=>{
    try{
    const {filme}= req.query;
    const {hora}= req.query;
    const {sala}= req.query;
    const resposta = await assentosOcupados(filme,hora,sala);
    resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

export default server;