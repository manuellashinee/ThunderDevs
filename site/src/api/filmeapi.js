import axios from "axios" ;


export async function confirmarFilme(idfranquia,idgenero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao){
    const asnwer = await axios.post('http://localhost:5000/adm/filme', {idfranquia,idgenero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao});
    return asnwer.data;
}

export async function enviarImagemFilme(id, imagem) {
    const formData = new FormData();
    formData.append(`imagem` , imagem);

    const resposta = await axios.put(`/adm/filme/${id}/imagem`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data"
        },
    });
    return resposta.status;
}
