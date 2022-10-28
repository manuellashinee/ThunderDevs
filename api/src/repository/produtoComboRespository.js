import { con } from "./connection.js"

export async function buscarComboPorId(id){
    const comando = ` 
     select ID_PEDIDO_COMBO     as id,
            ID_USUARIO 			INT,
            ID_COMBO 			as combo,
            ID_PAGAMENTO_COMBO 	as pagamento,
            DT_PEDIDO 			as pedido,
            DS_STATUS			as status,
            VL_TOTAL 			as total,

            from TB_PEDIDO_COMBO
            where = id_pedido_combo = ?
    `

    const [ registros ] = await con.query(comando, [id]);
    return registros[0];
}