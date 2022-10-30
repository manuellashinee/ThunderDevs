import { api } from "./url.js";

import axios from 'axios'
const API = axios.create({
    baseURL: api
})

export async function salvarNovoPedido(idUsuario, novoPedido){
    const r = await API.post('/api/pedidocombo/' + idUsuario, novoPedido);
    return r.data;
}