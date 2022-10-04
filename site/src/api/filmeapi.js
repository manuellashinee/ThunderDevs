
import { api } from "./url.js";


export async function confirmarFilme(idfranquia,idgenero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao){
    const asnwer = await api.post('/adm/filme', {idfranquia,idgenero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao});
    return asnwer.data;
}

export async function enviarImagemFilme(imagem, id) {
    const formData = new FormData();
    formData.append(`imagem` , imagem);

    const resposta = await api.put(`/adm/filme/${id}/imagem`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function vizualizarTFilmes(){
    const asnwer= await api.get('/consulta/filme')
    return asnwer.data;
}

export async function removerFilme(id) {
    const resposta = await api.delete(`/adm/filme/${id}`);
    return resposta.status;
}

export async function FiltrarFilmeNome(nome){
    const asnwer= await api.get(`/consulta/nome/filme?nome=${nome}`)
    return asnwer.data;
}

export async function alterarFilme(idfranquia,idgenero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao,id ) {

    const resposta = await api.put(`/adm/filme/${id}` , {idfranquia,idgenero,nome,duracao,
    classificacao, lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao
    })
    return resposta.data;
}

export async function buscarPorId(id){
    const resposta = await api.get(`/adm/filme/${id}`);
    return resposta.data;
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}
