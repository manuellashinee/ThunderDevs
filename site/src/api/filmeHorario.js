import { api } from "./url";


export async function horariosFilmeEmSala(filme, sala){
    const asnwer = await api.get(`/admin/filme/${filme}/sala/${sala}/horarios`);
    return asnwer.data;
}

export async function dataFilmeEmSala(filme, sala){
    const asnwer = await api.get(`/admin/filme/${filme}/sala/${sala}/data`);
    return asnwer.data;
}

export async function adddataFilmeEmSala(filme, idsala,de,ate ){
    const asnwer = await api.post(`/addsala/filme/${filme}`, {idsala,de,ate });
    return asnwer.data;
    
}

export async function addHorasFilmeEmSala(idsala,horas ){
    try{const asnwer = await api.get(`/addsala/horas/${idsala}`, horas);
    return asnwer.data;}catch(err){
        console.log(err.message)
    }
}

export async function addFinalFilmeEmSala(idsalafilme,horas ){
    const asnwer = await api.post(`/addsala/final`, {idsalafilme,horas});
    return asnwer.data;
}
