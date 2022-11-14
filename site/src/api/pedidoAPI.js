import { api } from "./url.js";

export async function salvarNovoPedido(idUsuario, novoPedido){
    try{const r = await api.post(`/pedidocombo/`+idUsuario, novoPedido);
    return r.data
}catch(err){
    console.log(err.message)
};
}

export async function visualizarCombosAdm(){
    const asnwer= await api.get(`/consulta/pedido/combo`)
    return asnwer.data;
}

export async function visualizarCombos(idusu){
    const asnwer= await api.get(`/consulta/pedido/combo/${idusu}`)
    return asnwer.data;
}

export async function retirarComboPedido(id) {
    const resposta = await api.delete(`/pedido/combo/${id}`);
    return resposta.status;
}


export async function FiltrarComboNome(nome){
    const asnwer= await api.get(`/consulta/nomepedido/combo?nome=${nome}`)
    return asnwer.data;
}

export async function FiltrarComboNomeAdm(nomeusuario){
    const asnwer= await api.get(`/consulta/nomepedido/combousuario?nomeusuario=${nomeusuario}`)
    return asnwer.data;
}


export async function alterarStatusPedido(id) {
    const resposta = await api.put(`consulta/status/pedido/combo/${id}`);
    return resposta.data;
}
