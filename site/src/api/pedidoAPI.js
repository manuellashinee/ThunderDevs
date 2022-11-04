import { api } from "./url.js";

export async function salvarNovoPedido(idUsuario, novoPedido){
    try{const r = await api.post(`/pedidocombo/`+idUsuario, novoPedido);
    return r.data
}catch(err){
    console.log(err.message)
};
}

export async function visualizarCombos(){
    const asnwer= await api.get('/consulta/pedido/comb/:idusu')
    return asnwer.data;
}

export async function retirarCombo(idCombo) {
    const resposta = await api.delete(`/adm/combo/${idCombo}`);
    return resposta.status;
}
