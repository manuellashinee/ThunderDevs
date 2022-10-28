import { Router } from 'express'
import { inserirPagamentoCombo, pedidoCombo } from '../repository/pedidoComboRepository';
const server = Router();

server.post('/api/pedidocombo/:idUsuario/', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;
        const NovoComboPedido = criarNovoPedidoCombo( info, idUsuario);

        const idPedidoComboCriado = await pedidoCombo(novoPedido);
        const idPagCombo = await inserirPagamentoCombo(info.cartao, idPedidoComboCriado);
        

    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }
})