import { con } from "./connection"

export async function buscarIngressoPorId(id){
    const comando = `

   select ID_INGRESSO 		    as id,
          ID_USUARIO 			INT,
          ID_PAGAMENTO_FILME  as pagamento,
          ID_FILME 			  as filme,
          NR_INTEIRAS         as inteiras,
	      NR_MEIAS            as meias,
	      VL_TOTAL            as total,
	      DS_STATUS           as status,
	      DT_PEDIDO           as pedido,
	      DT_EXIBICAO         as exibicao,
	      DS_HORARIO          as horario,
	      NR_SALA             as numeroSala,
    
        from tb_ingresso
        where = id_ingresso = ?
    `

    const [ registros ] = await con.query(comando, [id]);
    return registros[0];
}