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

export async function consultarTodosCombos(id){
    const comando= 
    ` SELECT
	nm_usuario			as nomeusuario,
    nm_combo            as nome,
    ds_combo            as descricao,
    img_combo            as foto,
    ID_PEDIDO_COMBO     as id,
    DT_PEDIDO             as datapedido,
    DS_STATUS            as status,
    VL_TOTAL             as total
    FROM TB_PEDIDO_COMBO
    inner join tb_combo on tb_combo.nm_combo = tb_combo.nm_combo
    inner join tb_usuario on tb_usuario.nm_usuario = tb_usuario.nm_usuario
    where tb_usuario.id_usuario = ?`;

    const [resposta] = await con.query(comando, [id])
    return resposta;
}
