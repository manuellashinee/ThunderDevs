import {con} from './connection.js'

export async function odeioFilmes(){
    const comando= 
            `SELECT 
                NM_FILME AS FILME,
                NR_SALA AS SALA,
                DT_DE AS DE,
                DT_ATE AS ATE,
                DS_HORARIO AS HORARIO
	        FROM
            TB_FILME_SALA_HORARIO
            INNER JOIN tb_SALA_HORARIO  ON tb_SALA_HORARIO.ID_SALA_HORARIO = TB_FILME_SALA_HORARIO.ID_SALA_HORARIO
            INNER JOIN tb_FILME_SALA  ON tb_FILME_SALA.ID_FILME_SALA = TB_FILME_SALA_HORARIO.ID_FILME_SALA
            Inner join tb_filme on tb_filme.id_filme = TB_FILME_SALA.id_filme
            Inner join tb_horario on tb_horario.id_horario = TB_SALA_horario.id_horario
            Inner join tb_sala on tb_sala.id_sala = TB_SALA_horario.id_sala;`;
    const [resposta] = await con.query(comando,[]);
    return resposta;
}