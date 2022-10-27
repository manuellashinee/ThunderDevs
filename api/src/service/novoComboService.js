
export function criarNovoPedidoCombo(info, idPedido, idUsuario) {

    let conclusao = meias + inteiras; 
    let agora = new Date();

    return{
        idPedido : idPedido,
        idusuario : idUsuario,
        combo : info.combo,
        pagamento: pagamento,
        datapedido: agora,
        status: 'Aguardando pagamento',
        total: conclusao
    }
}