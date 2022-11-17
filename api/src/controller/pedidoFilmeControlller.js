import { Router } from 'express'
import { alterarStatusPedidoFilme, consultarPedidosAssentos, consultarPedidosfilmesGeral, consultarPedidosfilmesUsuario, inserirAssentosPedido, inserirPagamentoFilme, pedidoFilme, removerFilmePagamento, removerFilmepedido } from '../repository/pedidoFilmeRepository.js';
import { criarNovoPedidoFilme } from '../service/novoPedidoFilmeService.js';

const server = Router();


server.post('/pedidoFilme/:idFilme', async (req, resp) => {
    try{
        const { idFilme} = req.params;
        const info = req.body;
        const novoPedido = criarNovoPedidoFilme(idFilme, info);

        const idPedidoFilmeCriado = await pedidoFilme(novoPedido);
        for(let i =0; i<novoPedido.assentos.length;i++){
            const adass= await inserirAssentosPedido(novoPedido.assentos[i],idPedidoFilmeCriado);
        }
        const idPagCombo = await inserirPagamentoFilme(info.pagamento, idPedidoFilmeCriado);
          

         resp.status(204).send();

    }
    catch(err){
        console.log(err);
        resp.status(404).send({
            erro: err.message
        });
    }
})


server.get('/pedidosfilme', async (req,resp)=>{
    try{
        const ingressos = await consultarPedidosfilmesGeral();
         resp.send(ingressos);
    }
    catch(err){
        console.log(err);
        resp.status(404).send({
            erro: err.message
        });
    }
})


server.get('/pedidosfilme/:idfilme', async (req,resp)=>{
    try{
        const {idfilme} = req.params;
        const ingressos = await consultarPedidosfilmesUsuario(idfilme);
         resp.send(ingressos);
    }
    catch(err){
        console.log(err);
        resp.status(404).send({
            erro: err.message
        });
    }
})


server.get('/assento/pedido/:ingresso',async (req,resp)=>{
    try{
        const {ingresso} = req.params;
        const assentos = await consultarPedidosAssentos(ingresso);
         resp.send(assentos);
    }
    catch(err){
        console.log(err);
        resp.status(404).send({
            erro: err.message
        });
    }
})



server.delete('/pedido/filme/:id', async (req, resp)=>{
    try{
        const  {id} = req.params;
        
        await removerFilmePagamento(id);
        await removerFilmepedido(id);
    
        
        

        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})



server.put('/consulta/status/pedido/filme/:id', async (req, resp)=>{
    try{
        const {id} = req.params;
        const perele = req.body;
        const resposta = await alterarStatusPedidoFilme(perele.pedido,id);
        resp.send();
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})



export default server;