import { api } from "./url.js";

export async function adicionarComentario(idfilme, idusuario,frase,avaliacao ){
    const resposta= await api.post (`/filme/${idfilme}/comentario`, {idusuario,frase,avaliacao });
    return resposta.data;
}

export async function verComentarios(idfilme){
    const resposta= await api.get (`/filme/${idfilme}/comentario`);
    return resposta.data;
}