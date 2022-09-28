import axios from "axios" ;

export async function loginAdm (email, senha) {
    const asnwer = await axios.post('http://localhost:5000/adm/login' , {
        email : email, 
        senha : senha 
    });
    return asnwer.data;
}