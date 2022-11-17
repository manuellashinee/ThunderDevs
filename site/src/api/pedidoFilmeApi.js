import { api } from "./url.js";

export async function salvarNovoPedidoFilme(idfilme, novoPedido){
    try{const r = await api.post(`/pedidofilme/`+idfilme, novoPedido);
    return r.data
}catch(err){
    console.log(err.message)
};
}

export async function todosIngressos(){
    const r = await api.get(`/pedidosfilme`);
    return r.data
}
export async function ingressosUsuario(idusu){
    const r = await api.get(`/pedidosfilme/${idusu}`);
    return r.data
}
export async function assentosIngresso(idingresso){
    const r = await api.get(`/assento/pedido/${idingresso}`);
    return r.data
}



export async function tirarFilmePedido(id) {
    const resposta = await api.delete(`/pedido/filme/${id}`);
    return resposta.status;
}


export async function mudarStatusPedidoFilme(pedido,id) {
    const resposta = await api.put(`consulta/status/pedido/filme/${id}`,{pedido});
    return resposta.data;
}