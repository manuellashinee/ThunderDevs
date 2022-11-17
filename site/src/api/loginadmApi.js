
import { api } from "./url";

export async function loginAdm (email, senha) {
    const asnwer = await api.post('/adm/login' , {
        email : email, 
        senha : senha 
    });
    return asnwer.data;
}