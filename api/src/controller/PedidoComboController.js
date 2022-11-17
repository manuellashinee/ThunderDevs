import { Router } from 'express'
import { consultarTodosCombos, consultarTodosCombosAdm, pedidoCombo, removerComboPagamento, consultarPedidoComboNome, alterarStatusPedido, consultarPedidoComboNomeAdm } from '../repository/pedidoComboRepository.js';
import { inserirPagamentoCombo } from '../repository/pedidoComboRepository.js';
import { criarNovoPedidoCombo } from '../service/novoComboService.js';
import { removerComboPedido } from '../repository/pedidoComboRepository.js';
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

server.get('/consulta/pedido/combo/:idusu', async (req, resp) =>{
    try{
        const  id= req.params.idusu;
        const combos=  await consultarTodosCombos(id);
        resp.send(combos);
    } 
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
} )

server.get('/consulta/pedido/combo', async (req, resp) =>{
    try{
        const  id= req.params;
        const combos=  await consultarTodosCombosAdm(id);
        resp.send(combos);
    } 
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
} )

server.delete('/pedido/combo/:id', async (req, resp)=>{
    try{
        const  id = req.params.id;
        const resposta2 = await removerComboPagamento(id);
        const resposta = await removerComboPedido(id);
       
        
        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/consulta/nomepedido/combo', async (req, resp)=>{
    try{
        const {nome} = req.query;
        const resposta = await consultarPedidoComboNome(nome);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.get('/consulta/nomepedido/combousuario', async (req, resp)=>{
    try{
        const {nomeusuario} = req.query;
        const resposta = await consultarPedidoComboNomeAdm(nomeusuario);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.put('/consulta/status/pedido/combo/:id', async (req, resp)=>{
        try {
            const { id } = req.params;
            const status = req.body;
    
            const resposta = await alterarStatusPedido(id, status);
            if (resposta != 1)
                throw new Error('pedido  não pode ser alterado')
            else
                resp.status(204).send();
        }
    
        catch (err) {
            resp.status(400).send({
                erro: err.message
            });
        }
})

export default server;

