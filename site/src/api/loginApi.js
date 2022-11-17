
import { api } from "./url";

export async function loginUsu(email, senha) {
    const asnwer = await api.post('/usuario/login' , {
        email : email, 
        senha : senha 
    });
    return asnwer.data;
}

