import { Router } from 'express'
import { consultarTodosCombos, pedidoCombo } from '../repository/pedidoComboRepository.js';
import { inserirPagamentoCombo } from '../repository/pedidoComboRepository.js';
import { criarNovoPedidoCombo } from '../service/novoComboService.js';
import { buscarComboPorId } from '../repository/produtoComboRespository.js';
const server = Router();

server.post('/pedidocombo/:idUsuario', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;
        const novoPedido = criarNovoPedidoCombo(idUsuario, info);

        const idPedidoComboCriado = await pedidoCombo(novoPedido);
        const idPagCombo = await inserirPagamentoCombo(info.pagamento, idPedidoComboCriado);
          

         resp.send();

    }
    catch(err){
        console.log(err);
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/consulta/combo', async (req, resp) =>{
    try{
        const combos=  await consultarTodosCombos();
        resp.send(combos);
    } 
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
} )
export default server;