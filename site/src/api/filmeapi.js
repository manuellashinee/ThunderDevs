
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
