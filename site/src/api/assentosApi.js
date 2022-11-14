import { api } from "./url";

export async function assentosSalas(){
    const resposta= await api.get(`/pedido/assentos`);
    return resposta.data;
}

export async function assentosEmIngresso(idfilme,hora,sala){
    const resposta= await api.get(`/ocupados/assentos?filme=${idfilme}&hora=${hora}&sala=${sala}`);
    return resposta.data;
}