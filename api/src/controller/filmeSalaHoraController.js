import { Router } from 'express';
import { colocarFilmeNaSala, DataFilmeEmSala, horariosFilmeEmSala, odeioFilmes } from '../repository/filmeSalaHoraRepository.js';
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

server.get('/admin/filme/:filme/sala/:sala/horarios', async (req, resp) =>{
    try{
        const resposta = await horariosFilmeEmSala(req.params.filme, req.params.sala);
        resp.send(resposta);
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
} )

server.get('/admin/filme/:filme/sala/:sala/data', async (req, resp) =>{
    try{
        const resposta = await DataFilmeEmSala(req.params.filme, req.params.sala);
        resp.send(resposta);
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
} )

server.post('/addsala/filme/:filme', async (req, resp) =>{
    try{
        const dados = req.body;
        const resposta = await colocarFilmeNaSala(req.params.filme, dados);
        resp.send({idFilmeSala:resposta});
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
} )



export default server;
