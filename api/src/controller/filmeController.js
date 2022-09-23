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

server.put('/adm/filme/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        if (!req.file)
            throw new Error('Escolha a imagem do Filme.');

        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    }catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


export default server;
