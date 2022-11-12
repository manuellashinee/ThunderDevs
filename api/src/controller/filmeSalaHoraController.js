import { Router } from 'express';
import { colocarFilmeNaSala, DataFilmeEmSala, horariosFilmeEmSala, HorasPraPedido, inserirUmaHora, insertFinalSala, odeioFilmes, removerFilmeAntigoData, removerFilmeAntigoHoras, salasPraPedido, umaHoraId, verHoraiosPrainserir, verUMHoraios } from '../repository/filmeSalaHoraRepository.js';
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
        const remove2= await removerFilmeAntigoHoras(dados.idsala,req.params.filme);
        const remove1= await removerFilmeAntigoData(dados.idsala,req.params.filme);
         const resposta = await colocarFilmeNaSala(req.params.filme, dados);
        resp.send({idsalafilme:resposta});
        }catch(err){
            resp.status(404).send({
                erro: err.message
            });
        }
} )

server.post('/addsala/horas/:idsala', async (req,resp)=>{
    try{
        const {idsala}= req.params;
        const horarios = req.body;

        console.log(horarios);

        for(let i = 0; i < horarios.horas.length; i++ ){
            const a= await verUMHoraios(idsala, horarios.horas[i])
            if(a[0] === null || a[0] === undefined ){
                const idhora= await umaHoraId(horarios.horas[i]) 
                const x= await inserirUmaHora(idsala,idhora.horario);
                
            }
        }

        const resposta= await verHoraiosPrainserir(idsala,horarios.horas)
        
        resp.send(resposta)
    }catch(err){
        console.log(err)
        resp.status(404).send({
            erro: err.message
        });
    }

})

server.post('/addsala/final', async (req,resp) =>{
    try{
        const ids = req.body;
        for(let i = 0; i < ids.horas.length; i++ ){
            const x= await insertFinalSala(ids.idsalafilme,ids.horas[i].idSalaHora)
        }
        resp.status(204).send();
    }catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }
})

//pedidoFilme

server.get('/qtd/salas/:idfilme', async (req,resp) =>{
    try{
        const {idfilme}= req.params;
        const resposta= await salasPraPedido(idfilme);
        resp.send(resposta)
    }catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/qtd/horas', async (req,resp) =>{
    try{
        const idfilme = req.query.idfilme;
        const idsala = req.query.idsala;
        const resposta= await HorasPraPedido(idfilme,idsala);
        resp.send(resposta)
    }catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }
})



export default server;
