import axios from "axios" ;

export async function loginUsu(email, senha) {
    const asnwer = await axios.post('http://localhost:5000/usuario/login' , {
        email : email, 
        senha : senha 
    });
    return asnwer.data;
}

