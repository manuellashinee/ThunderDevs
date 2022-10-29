
export function criarNovoPedidoCombo(idPedidoCombo, idUsuario, idcombo, idpagamentoCombo, pagamento, total) {
    let agora = new Date();
   
    return{
        idPedidoCombo : idPedidoCombo,
        idusuario : idUsuario,
        idcombo : idcombo,
        idpagamentoCombo: idpagamentoCombo,
        pagamento: pagamento,
        data: agora,
        status: 'Aguardando pagamento',
        total: total
    }
   
}