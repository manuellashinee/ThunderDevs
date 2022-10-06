import { Router } from 'express';
import { inserirComentario, vizualizarComentarios } from '../repository/comentarioRepository.js';
const server = Router();

server.post('/filme/:idfilme/comentario', async (req, resp) =>{
    try{
        const {idfilme} = req.params;
        const coment = req.body;
        const resposta = await inserirComentario(idfilme,coment);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/filme/:idfilme/comentario', async (req, resp)=>{
    try{
        const {idfilme} = req.params
        const resposta= await vizualizarComentarios(idfilme);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})



export default server;