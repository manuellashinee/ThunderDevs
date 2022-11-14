export function buy(assentos,selecionados,axento) {
    if (assentos.find(item => item.idassento === axento)){
        return "desabilitado";
    }
    else if(selecionados.find(item => item === axento)){
        return "previo";
    }
    else
        return "assento-p";
}
