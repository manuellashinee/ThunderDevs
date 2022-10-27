import { Router } from 'express'
import { pedidoCombo } from '../repository/pedidoComboRepository';
const server = Router();

server.post('/api/pedidocombo/:idUsuario/', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;
        const NovoComboPedido = criarNovoPedidoCombo();

        const PedidoComboCriado = await pedidoCombo();
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        });
    }
})