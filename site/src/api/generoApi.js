import axios from "axios" ;


export async function consultarGeneros(){
    const asnwer = await axios.get('http://localhost:5000/genero');
    return asnwer.data;
}