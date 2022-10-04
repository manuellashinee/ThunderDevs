import { Router } from 'express';
const server = Router();

import multer from "multer" ;
import { cadastroFilme, alterarImagem, consultarTodosFilme, consultarFilmeGenero, consultarFilmeFranquia, removerFilme, alterarFilme, pesquisarFilmeNome, consultarFilmeId} from '../repository/filmeRepository.js';
const upload = multer({dest: 'storage/fotosfilmes'}) 

server.post('/adm/filme', async (req, resp) =>{
    try{
        const filme = req.body;

        const idfilme = await cadastroFilme(filme);

        resp.send({ 
            id: idfilme
         });
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
        
        resp.status(204).send();
    }catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/consulta/filme', async (req, resp) =>{
    try{
        const filmes=  await consultarTodosFilme();
        resp.send(filmes);
    } 
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
} )

server.get('/consulta/genero/filme/:idgenero', async (req, resp) =>{
    try{
        const  id = req.params.idgenero
        const filmes =  await consultarFilmeGenero(id);
        resp.send(filmes);
    } 
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
} )

server.get('/consulta/franquia/filme/:idfranquia', async (req, resp) =>{
    try{
        const  id = req.params.idfranquia;
        const filmes=  await consultarFilmeFranquia(id);
        resp.send(filmes);
    } 
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
} )

server.delete('/adm/filme/:id', async (req, resp)=>{
    try{
        const  id = req.params.id;
        const remove = await removerFilme(id);
        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/adm/filme/:id', async (req, resp ) =>{
        try{
            const id= req.params.id;
            const filme = req.body;

            const alteracao= await alterarFilme(filme, id);
           if(alteracao === 1){
            resp.status(204).send();
           }
           else{
            throw new Error('filme não pode ser alterado')
           }
        }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
} )

server.get('/consulta/nome/filme', async (req, resp)=>{
    try{
        const {nome} = req.query;
        const resposta = await pesquisarFilmeNome(nome);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.get('/adm/filme/:id', async (req, resp)=>{
    try{
        const idfilme= req.params.id;
        const resposta = await consultarFilmeId(idfilme);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})


export default server;
