import axios from "axios" ;

export async function loginAdm (email, senha) {
    const asnwer = await axios.post('http://localhost:3000/adm/loginadm' , {
        email : email, 
        senha : senha 
    });
    return asnwer.data;
}