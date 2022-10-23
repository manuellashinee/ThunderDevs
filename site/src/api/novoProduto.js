export function CalcularTotal(meias, inteiras){
    let total = meias + inteiras;
    return total;
}

export function criarNovoPedido(idUsuario, idIngresso, idFilme, idPagamentoFilme, total){

    let total = CalcularTotal();

    return {
        idIngresso: idIngresso,
        idUsuario: idUsuario,
        idPagamentoFilme: idPagamentoFilme,
        idFilme:  idFilme,
        inteiras: inteiras,
        meias: meias,
        total: total,
        status: 'Aguardando',
        pedido:  pedido,
        exibicao: exibicao,
        horario: horario,
        sala: sala
    }
}