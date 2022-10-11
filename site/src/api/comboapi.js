import { api } from "./url.js";

export async function confirmarCombo(nome, descricao, preco){
    const asnwer = await api.post('/adm/combo', {nome, descricao, preco});
    return asnwer.data;
}

export async function vizualizarTCombos(){
    const asnwer= await api.get('/adm/combo')
    return asnwer.data;
}

export async function FiltrarComboNome(nome){
    const asnwer= await api.get(`/adm/combo/nome?nome=${nome}`)
    return asnwer.data;
}

export async function FiltrarComboId(id){
    const asnwer= await api.get(`/consulta/combo/${id}`)
    return asnwer.data;
}

export async function retirarCombo(id) {
    const resposta = await api.delete(`/adm/combo/${id}`);
    return resposta.status;
}