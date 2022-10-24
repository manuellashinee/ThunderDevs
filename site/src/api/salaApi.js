import { api } from "./url.js";

export async function vizualizarTSalas(){
    const asnwer= await api.get('/adm/sala')
    return asnwer.data;
}