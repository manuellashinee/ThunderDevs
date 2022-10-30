import { api } from "./url.js";

import axios from 'axios'
const api = axios.create({
    baseURL: api
})

export async function salvarNovoPedido(idUsuario, novoPedido){
    const r = await api.post('/api/pedidocombo/' + idUsuario, novoPedido);
    return r.data;
}