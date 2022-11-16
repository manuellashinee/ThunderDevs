
export function criarNovoPedidoFilme(idFilme, info) {
    let agora = new Date();
    return{
        idusuario : info.idusuario,
        idFilme : idFilme,
        inteiras: info.inteiras,
        meias:info.meias,
        total:info.total,
        pagamento: info.pagamento,
        status: 0,
        data: agora,
        dataFilme: info.dataFilme,
        horario: info.horario,
        sala:info.sala,
        assentos: info.assentos
    }
}
