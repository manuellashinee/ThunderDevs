import {con} from './connection.js'


export async function pedidoCombo(novoPedido){
    const comando = `INSERT INTO  TB_PEDIDO_COMBO(
        ID_USUARIO 			,
        ID_COMBO 			,
        DT_PEDIDO 			,
        DS_STATUS           ,
        VL_TOTAL 			
        )  VALUES(?,?,?,?,?)`

        const [info] = await con.query(comando, [
            novoPedido.idusuario,
            novoPedido.idcombo,
            novoPedido.data,
            novoPedido.status,
            novoPedido.total
        
        ]);
        return info.insertId;
        
}

export async function inserirPagamentoCombo(pagamentoCombo,idpedido){
    const comando = `INSERT INTO TB_PAGAMENTO_COMBO(
        ID_PEDIDO_COMBO         ,
        DS_CARTAO 				,
        DT_VENCIMENTO_CARTAO 	,
        DS_CVV 					,
        NM_CARTAO 			    ,
        DS_BANDEIRA_CARTAO 		,
        DS_FORMA_PAGAMENTO		
        ) VALUES(?,?,?,?,?,?,?)`
        
        const [info] = await con.query(comando, [ 

            idpedido,
            pagamentoCombo.numero,
            pagamentoCombo.vencimento,
            pagamentoCombo.cvv,
            pagamentoCombo.nome,
            pagamentoCombo.bandeira,
            pagamentoCombo.formaPagamento

        ]);
        return info.affectedRows;
}

export async function consultarTodosCombos(){
    const comando= 
    `   SELECT
        ID_PEDIDO_COMBO 	as id,
        ID_USUARIO 			as idUsuario,
        ID_COMBO 			as idcombo,
        DT_PEDIDO 			as datapedido,
        DS_STATUS			as status,
        VL_TOTAL 			as total
        FROM TB_PEDIDO_COMBO`

    const [resposta] = await con.query(comando)
    return resposta;
}
