import { inserirPagamento } from '../repository/pedidoRepository.js'
import {buscarIngressoPorId} from '../repository/produtoRepository.js'
import { Router } from 'express';

const server = Router();

server.post('/api/ingresso/:idUsuario', async (req, resp) => {
    try {
      const { idUsuario } = req.params;
      const info = req.body;

      const novoIngresso = criarNovoPedido(idUsuario, info);

      const idPedidoCriado = await inserirIngresso(novoIngresso);
      const idPagCriado = await inserirPagamento(idPedidoCriado, info.cartao);

      for ( let item of info.ingressos) {
            const ingre = await buscarIngressoPorId(item.id);
            const idIngressoItemCriado = await inserirIngressoItem(idPedidoCriado, ingre.id, ingre.preco);
      }
      
      resp.status(204).send();

    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;
 

