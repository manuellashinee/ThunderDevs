import { Router } from 'express'
import { inserirAssentosPedido, inserirPagamentoFilme, pedidoFilme } from '../repository/pedidoFilmeRepository.js';
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


export default server;