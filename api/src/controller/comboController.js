import { Router } from 'express';
import { inserirCombo, pesquisarComboId, pesquisarComboNome, pesquisarCombos, removerCombo } from '../repository/comboRepository.js';
const server = Router();


server.post('/adm/combo', async (req,resp)=>{
    try{
    const combo = req.body;
    const idcombo = await inserirCombo(combo);
    resp.send({ 
        id: idcombo
     });
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

server.get('/adm/combo/nome', async (req, resp)=>{
    try{
        const {nome} = req.query;
        const resposta = await pesquisarComboNome(nome);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.get('/consulta/combo/:id', async (req, resp)=>{
    try{
        const {id} = req.params;
        const resposta = await pesquisarComboId(id);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.delete('/adm/combo/:id', async (req, resp)=>{
    try{
        const  id = req.params.id;
        const remove = await removerCombo(id);
        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;