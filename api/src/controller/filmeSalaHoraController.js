import { Router } from 'express';
import { colocarFilmeNaSala, DataFilmeEmSala, horariosFilmeEmSala, odeioFilmes, removerFilmeAntigoData, removerFilmeAntigoHoras, verHoraiosPrainserir, verUMHoraios } from '../repository/filmeSalaHoraRepository.js';
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
        const remove1= await removerFilmeAntigoData(req.params.filme,dados.idsala);
        const remove2= await removerFilmeAntigoHoras(req.params.filme,dados.idsala);
        const resposta = await colocarFilmeNaSala(req.params.filme, dados);
        resp.send({idFilmeSala:resposta,
            filmeRemoveu:remove1,
             filmeHorasRemoveu:remove2});
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
} )

server.get('/addsala/horas/:idsala', async (req,resp)=>{
    try{
        const {idsala}= req.params;
        const horas = req.body;

        for(let i = 0; i <= horas.length; i++ ){
            const a= await verUMHoraios(idsala, horas[i])
            if(!a){
            }
        }

        const resposta= await verHoraiosPrainserir(idsala,horas)
        resp.send(resposta)
    }catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }

})



export default server;
