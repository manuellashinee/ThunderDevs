import {con} from './connection.js'

export async function todosHorarios(){
    const comando=`
            SELECT 
	            ID_horario as idHorario,
                ds_horario as horario
            FROM TB_horario`;
    const [linhas] = await con.query(comando, [])
    return linhas;     
}