import { api } from "./url.js";

import axios from 'axios'
const api = axios.create({
    baseURL: api
})

export async function salvarNovoPedido(id, novoPedido){
    const r = await api.post('/api/pedidocombo/' + id, novoPedido);
    return r.data;
}