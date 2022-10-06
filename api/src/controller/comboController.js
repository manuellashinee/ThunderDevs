import { Router } from 'express';
import { inserirCombo, pesquisarCombos } from '../repository/comboRepository.js';
const server = Router();


server.post('/adm/combo', async (req,resp)=>{
    try{
    const combo = req.body;
    const resposta = await inserirCombo(combo);
    resp.status(204).send()
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/adm/combo', async (req,resp)=>{
    try{
    const resposta = await pesquisarCombos();
    resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

export default server;