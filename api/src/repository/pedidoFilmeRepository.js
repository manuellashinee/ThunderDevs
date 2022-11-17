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


export async function consultarPedidosfilmesGeral(){
    const comando = `select tb_ingresso.id_ingresso as idingresso,
                    Nm_usuario as usuario,
                    NM_filme as filme,
                    img_capa as capa,
                    NR_INTEIRAS AS inteiras,
                    NR_MEIAS AS meias,
                    DS_FORMA_PAGAMENTO as formaDePagamento,
                    VL_TOTAL AS TOTAL,
                    DS_STATUS AS statusa,
                    DT_EXIBICAO AS dataExibicao,
                    ds_horario as horario,
                    nr_sala as sala
                    from TB_ingresso
                    Inner join tb_usuario on tb_usuario.id_usuario = TB_ingresso.id_usuario
                    Inner join tb_filme on tb_filme.id_filme = TB_ingresso.id_filme
                    inner join tb_pagamento_filme on tb_pagamento_filme.id_ingresso = tb_ingresso.id_ingresso`;
    const [resposta] = await con.query(comando,[]);
    return resposta
}

export async function consultarPedidosfilmesUsuario(idusu){
    const comando = `select tb_ingresso.id_ingresso as idingresso,
                    Nm_usuario as usuario,
                    NM_filme as filme,
                    img_capa as capa,
                    NR_INTEIRAS AS inteiras,
                    NR_MEIAS AS meias,
                    DS_FORMA_PAGAMENTO as formaDePagamento,
                    VL_TOTAL AS TOTAL,
                    DS_STATUS AS statusa,
                    DT_EXIBICAO AS dataExibicao,
                    ds_horario as horario,
                    nr_sala as sala
                    from TB_ingresso
                    Inner join tb_usuario on tb_usuario.id_usuario = TB_ingresso.id_usuario
                    Inner join tb_filme on tb_filme.id_filme = TB_ingresso.id_filme
                    inner join tb_pagamento_filme on tb_pagamento_filme.id_ingresso = tb_ingresso.id_ingresso
                    where tb_ingresso.id_usuario = ?`;
    const [resposta] = await con.query(comando,[idusu]);
    return resposta
}


export async function consultarPedidosAssentos(ingressoid){
    const comando = `select ds_fileira as fileira,
                    nr_assento as assento from tb_ingresso_assento
                    inner join tb_assento on tb_assento.id_assento = tb_ingresso_assento.id_assento
                    where id_ingresso = ?`;
    const [resposta] = await con.query(comando,[ingressoid]);
    return resposta
}


export async function removerFilmepedido(id){
    const comando= `    
                    delete from tb_ingresso
                        where id_ingresso = ? `;
    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
  
}


export async function removerFilmePagamento(id){
    
    console.log(id)
    const comando= `    
                    delete from tb_pagamento_filme
                        where id_ingresso = ? `;
    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}


export async function alterarStatusPedidoFilme(statusa,idpedido){
    const comando= `    
    update tb_ingresso
    set ds_status = ?
    where id_ingresso = ?
            
    `;
    const [resposta] = await con.query(comando, [ statusa,idpedido])
    return resposta.affectedRows;
}

