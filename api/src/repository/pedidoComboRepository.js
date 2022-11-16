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

export async function consultarTodosCombos(idusu){
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
    inner join tb_combo on tb_pedido_combo.id_combo = tb_combo.id_combo
    inner join tb_usuario on tb_usuario.id_usuario = TB_PEDIDO_COMBO.id_usuario
    where tb_usuario.id_usuario = ? `;

    const [resposta] = await con.query(comando, [idusu])
    return resposta;
}

export async function consultarTodosCombosAdm(){
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
    inner join tb_combo on tb_pedido_combo.id_combo = tb_combo.id_combo
    inner join tb_usuario on tb_usuario.id_usuario = TB_PEDIDO_COMBO.id_usuario 
    order by nm_combo`;

    const [resposta] = await con.query(comando, [])
    return resposta;
}

export async function consultarPedidoComboNome(nome){
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
    inner join tb_combo on tb_pedido_combo.id_combo = tb_combo.id_combo
    inner join tb_usuario on tb_usuario.id_usuario = TB_PEDIDO_COMBO.id_usuario 
    where nm_combo like "${nome}%" `;

    const [resposta] = await con.query(comando, [nome])
    return resposta;
}


export async function consultarPedidoComboNomeAdm(nomeusuario){
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
    inner join tb_combo on tb_pedido_combo.id_combo = tb_combo.id_combo
    inner join tb_usuario on tb_usuario.id_usuario = TB_PEDIDO_COMBO.id_usuario 
    where nm_combo like "${nomeusuario}%" `;

    const [resposta] = await con.query(comando, [nomeusuario])
    return resposta;
}

export async function removerComboPedido(id){
    const comando= `    
                    delete from tb_pedido_combo 
                        where id_pedido_combo = ? `;
    const [resposta] = await con.query(comando, [id])
    console.log(resposta);
    return resposta.affectedRows;
  
}


export async function removerComboPagamento(id){
    const comando= `    
                    delete from tb_pagamento_combo 
                        where id_pagamento_combo = ? `;
    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}

export async function alterarStatusPedido(idpedido, status){
    const comando= `    
        update tb_pedido_combo 
        set ds_status = ?
        where id_pedido_combo = ?
    `;
    const [resposta] = await con.query(comando, [idpedido.id, status])
    return resposta.affectedRows;
}





