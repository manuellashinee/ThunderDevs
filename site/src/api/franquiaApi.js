
import { api } from "./url";


export async function consultarFranquias(){
    const asnwer = await api.get('/franquia');
    return asnwer.data;
}