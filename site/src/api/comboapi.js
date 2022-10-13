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

export async function enviarImagemCombo(imagem, id) {
    const formData = new FormData();
    formData.append(`imagem` , imagem);

    const resposta = await api.put(`/adm/combo/${id}/imagem`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function alterarCombo(nome, descricao, preco, id){
    const resposta = await api.put(`/adm/combo/${id}` , {nome, descricao, preco })
    return resposta.data;
}

export async function buscarPorId(id){
    const resposta = await api.get(`/adm/combo/${id}`);
    return resposta.data;
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}
