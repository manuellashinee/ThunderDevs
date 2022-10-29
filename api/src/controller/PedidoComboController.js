import { Router } from 'express'
import { pedidoCombo } from '../repository/pedidoComboRepository.js';
import { inserirPagamentoCombo } from '../repository/pedidoComboRepository.js';
import { criarNovoPedidoCombo } from '../service/novoComboService.js';
import { buscarComboPorId } from '../repository/produtoComboRespository.js';
const server = Router();

server.post('/api/pedidocombo/:idUsuario/', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;
        const novoPedido = criarNovoPedidoCombo( info, idUsuario);

        const idPedidoComboCriado = await pedidoCombo(novoPedido);
        const idPagCombo = await inserirPagamentoCombo(info.cartao, idPedidoComboCriado);
        
        for(let item of info.pedidoCombo){
            const prod = await buscarComboPorId(item.id);
        }

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