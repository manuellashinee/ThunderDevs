import {con} from './connection.js'

export async function horarioSala(idsala){
    const comando=`
        SELECT	ID_SALA_HORARIO AS ID, 
            TB_SALA_HORARIO.ID_SALA AS IDSALA,
            TB_SALA_HORARIO.ID_HORARIO AS IDHORARIO,
            DS_HORARIO AS HORARIO,
            NR_SALA AS SALA
        FROM tb_SALA_HORARIO
        Inner join tb_horario on tb_horario.id_horario = TB_SALA_horario.id_horario
        Inner join tb_sala on tb_sala.id_sala = TB_SALA_horario.id_sala
        WHERE tb_SALA_HORARIO.ID_SALA = ?`;
    const [linhas] = await con.query(comando, [idsala])
    return linhas;     
}