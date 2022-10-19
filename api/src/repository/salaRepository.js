import {con} from './connection.js'

 export async function todasSalas(){
    const comando=` SELECT 
	                    iD_SALA as idSala,
                        nr_sala as Numero
                    FROM TB_sala`;
    const [linhas] = await con.query(comando, [])
    return linhas;              
}