import { api } from "./url.js";

export async function confirmarCombo(nome, descricao, preco){
    const asnwer = await api.post('/adm/combo', {nome, descricao, preco});
    return asnwer.data;
}