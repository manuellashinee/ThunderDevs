import axios from "axios" ;

export async function login (email, senha) {
    const asnwer = await axios.post('http://localhost:3000/usuario/login' , {
        email : email, 
        senha : senha 
    });
    return asnwer.data;
}