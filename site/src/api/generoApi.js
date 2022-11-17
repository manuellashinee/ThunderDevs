
import { api } from "./url";


export async function consultarGeneros(){
    const asnwer = await api.get('/genero');
    return asnwer.data;
}