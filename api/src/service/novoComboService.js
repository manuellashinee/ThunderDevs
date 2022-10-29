
export function criarNovoPedidoCombo(info, idPedido, idUsuario, total) {
    let agora = new Date();
    return{
        idPedido : idPedido,
        idusuario : idUsuario,
        combo : info.combo,
        pagamento: pagamento,
        datapedido: agora,
        status: 'Aguardando pagamento',
        total: total
    }
   
}