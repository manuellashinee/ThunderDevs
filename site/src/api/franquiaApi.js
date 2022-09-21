import axios from "axios" ;


export async function consultarFranquias(){
    const asnwer = await axios.get('http://localhost:5000/franquia');
    return asnwer.data;
}