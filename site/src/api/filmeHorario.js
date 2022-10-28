import axios from "axios" ;


export async function horariosFilmeEmSala(filme, sala){
    const asnwer = await axios.get(`http://localhost:5000/admin/filme/${filme}/sala/${sala}/horarios`);
    return asnwer.data;
}