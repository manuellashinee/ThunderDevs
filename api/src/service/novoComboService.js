
export function criarNovoPedidoCombo(idUsuario, info) {
    let agora = new Date();
    return{
        idusuario : idUsuario,
        idcombo : info.idcombo,
        pagamento: info.pagamento,
        data: agora,
        status: 'Esperando Confirmação...',
        total: info.total
    }
}
