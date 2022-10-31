import { api } from "./url.js";

export async function salvarNovoPedido(id, novoPedido){
    const r = await api.post('/api/pedidocombo/' + id, novoPedido);
    return r.data;
}