function CalcularTotal(meias, inteiras){
    let total =  meias + inteiras;
    return total;
}

function criarNovoPedido(idUsuario, idIngresso, idFilme, idPagamentoFilme){
    
   
    let total = CalcularTotal(total.meias, total.inteiras);

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
