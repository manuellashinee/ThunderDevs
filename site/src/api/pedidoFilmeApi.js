import { api } from "./url.js";

export async function salvarNovoPedidoFilme(idfilme, novoPedido){
    try{const r = await api.post(`/pedidofilme/`+idfilme, novoPedido);
    return r.data
}catch(err){
    console.log(err.message)
};
}