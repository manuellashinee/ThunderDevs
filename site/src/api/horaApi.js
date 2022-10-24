import { api } from "./url.js";

export async function vizualizarThoras(){
    const asnwer= await api.get('/adm/horario')
    return asnwer.data;
}