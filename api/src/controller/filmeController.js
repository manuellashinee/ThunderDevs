import { Router } from 'express';
const server = Router();

import multer from "multer" ;
import { cadastroFilme } from '../repository/filmeRepository.js';
const upload = multer({dest: 'storage/fotosfilmes'}) 

server.post('/adm/filme', async (req, resp) =>{
    try{
        const filme = req.body;

        await cadastroFilme(filme);

        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
