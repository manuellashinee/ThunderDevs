import {con} from './connection.js'


export async function pedidoFilme(novoPedido){
    const comando = `INSERT INTO  TB_Ingresso(
        ID_USUARIO 			,
        ID_filme 			,
        NR_INTEIRAS         ,
        NR_MEIAS            ,
        VL_TOTAL 			,
        DS_STATUS           ,
        DT_PEDIDO 			,
        DT_EXIBICAO         ,
        DS_HORARIO          ,
        NR_SALA             
        )  VALUES(?,?,?,?,?,?,?,?,?,?)`

        const [info] = await con.query(comando, [
            novoPedido.idusuario,
            novoPedido.idFilme,
            novoPedido.inteiras,
            novoPedido.meias,
            novoPedido.total,
            novoPedido.status,
            novoPedido.data,
            novoPedido.dataFilme,
            novoPedido.horario,
            novoPedido.sala
        
        ]);
        return info.insertId;
        
}

export async function inserirAssentosPedido(lugar,idfilme){
    const comando = `INSERT INTO TB_ingresso_assento(
        ID_ASSENTO				,
        ID_INGRESSO             
        ) values(?,?)`
    
    const [resposta] = await con.query(comando,[lugar,idfilme]);
    return resposta.affectedRows;
}

export async function inserirPagamentoFilme(pagamentoFilme,idpedido){
    const comando = `INSERT INTO TB_PAGAMENTO_FILME(
        ID_INGRESSO             ,
        DS_CARTAO 				,
        DT_VENCIMENTO_CARTAO 	,
        DS_CVV 					,
        NM_CARTAO 			    ,
        DS_BANDEIRA_CARTAO 		,
        DS_FORMA_PAGAMENTO		
        ) VALUES(?,?,?,?,?,?,?)`
        
        const [info] = await con.query(comando, [ 

            idpedido,
            pagamentoFilme.numero,
            pagamentoFilme.vencimento,
            pagamentoFilme.cvv,
            pagamentoFilme.nome,
            pagamentoFilme.bandeira,
            pagamentoFilme.formaPagamento

        ]);
        return info.affectedRows;
}