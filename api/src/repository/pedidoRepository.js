import {con} from './connection.js'


export async function inserirPagamento(idPagamentoFilme , novopagamento){
    const comando = `
         INSERT INTO TB_PAGAMENTO_FILME (
        ID_PAGAMENTO_FILME,
        NR_CARTAO,
        DT_VENCIMENTO_CARTAO,
        DS_CVV,
        NM_CARTAO,
        DS_BANDEIRA_CARTAO,
        NR_PARCELAS,
        DS_FORMA_PAGAMENTO
    )
    VALUES (?,?,?,?,?,?,?,?); 
    `

    const [info] = await con.query(comando, [
        idPagamentoFilme,
        novopagamento.numero,
        novopagamento.vencimento,
        novopagamento.codSeguranca,
        novopagamento.nome,
        novopagamento.bandeira,
        novopagamento.parcelas,
        novopagamento.formaPagamento

    ]);
    return info.affectedRows;
}

export async function inserirIngresso(novoIngresso, idIngresso, idUsuario,idPagamentoFilme, idFilme){
    const comando = `
    INSERT INTO TB_INGRESSO(
        ID_INGRESSO,
        ID_USUARIO,
        ID_PAGAMENTO_FILME,
        ID_FILME,
        NR_INTEIRAS,
        NR_MEIAS,
        VL_TOTAL,
        DS_STATUS,
        DT_PEDIDO,
        DT_EXIBICAO,
        DS_HORARIO,
        NR_SALA   )
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?) 
`
const [info] = await con.query(comando, [
    
   idIngresso,
   idUsuario,
   idPagamentoFilme,
   idFilme,
   novoIngresso.inteiras,
   novoIngresso.meias,
   novoIngresso.total,
   novoIngresso.status,
   novoIngresso.pedido,
   novoIngresso.exibicao,
   novoIngresso.horario,
   novoIngresso.sala


]);
return info.insertId;
}