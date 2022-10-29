import { api } from "./url";


export async function horariosFilmeEmSala(filme, sala){
    const asnwer = await api.get(`/admin/filme/${filme}/sala/${sala}/horarios`);
    return asnwer.data;
}

export async function dataFilmeEmSala(filme, sala){
    const asnwer = await api.get(`/admin/filme/${filme}/sala/${sala}/data`);
    return asnwer.data;
}