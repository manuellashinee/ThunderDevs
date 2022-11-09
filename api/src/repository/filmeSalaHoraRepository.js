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

export async function horariosFilmeEmSala(filme, sala){
    const comando= 
            `SELECT ds_horario as horario
            FROM tb_FILME_SALA_HORARIO FSH
            INNER JOIN tb_filme_sala fs on fs.id_filme_sala = fsh.id_filme_sala
            INNER JOIN tb_sala_horario  SH on fsh.id_sala_horario = sh.id_sala_horario
            INNER JOIN tb_horario h on sh.id_horario = h.id_horario
            WHERE fs.id_sala = ?
              and fs.id_filme = ?;`;
    const [resposta] = await con.query(comando,[sala, filme]);
    return resposta;
}


export async function DataFilmeEmSala(filme, sala){
const comando= 
        `SELECT 	dt_de de,
                    dt_ate ate
        FROM tb_FILME_SALA_HORARIO FSH
        INNER JOIN tb_filme_sala fs on fs.id_filme_sala = fsh.id_filme_sala
        INNER JOIN tb_sala_horario  SH on fsh.id_sala_horario = sh.id_sala_horario
        INNER JOIN tb_horario h on sh.id_horario = h.id_horario
        WHERE fs.id_sala = ?
        and fs.id_filme = ?;`;
const [resposta] = await con.query(comando,[sala, filme]);
return resposta;
}


export async function colocarFilmeNaSala(idfilme,salaDados){
    const comando= 
        `insert into tb_filme_sala(id_filme, id_sala, dt_de, dt_ate)
        values(?,?,?,?)`;
const [resposta] = await con.query(comando,[idfilme, salaDados.idsala, salaDados.de, salaDados.ate]);
return resposta.insertId;
}

export async function removerFilmeAntigoHoras(idSala,idfilme){
    const comando= 
        `delete tb_filme_sala_horario from tb_filme_sala_horario
        INNER JOIN tb_filme_sala ON tb_filme_sala.id_filme_sala = tb_filme_sala_horario.id_filme_sala
        where tb_filme_sala.id_sala =? and tb_filme_sala.id_filme= ?`;
    const [resposta] = await con.query(comando,[idSala,idfilme]);
    return resposta.affectedRows;
}


export async function removerFilmeAntigoData(idSala,idfilme){
    const comando= 
        `delete from tb_filme_sala
        where id_sala =? and id_filme=?`;
    const [resposta] = await con.query(comando,[idSala,idfilme]);
    return resposta.affectedRows;
}

export async function verHoraiosPrainserir(idsala,horas){
    const comando=`
    select id_sala_horario as idSalaHora
    from tb_sala_horario sh
    inner join tb_horario h on h.id_horario = sh.id_horario
    where sh.id_sala = ?
      and ds_horario in (?)
    `;
    const [resposta] = await con.query(comando,[idsala,horas]);
    return resposta;
}


export async function verUMHoraios(idsala,hora){
    const comando=`
    select id_sala_horario as idSalaHora
    from tb_sala_horario sh
    inner join tb_horario h on h.id_horario = sh.id_horario
    where sh.id_sala = ?
      and ds_horario =?
    `;
    const [resposta] = await con.query(comando,[idsala,hora]);
    return resposta;
}

export async function umaHoraId(hora){
    const comando= `
    select ID_HORARIO as horario
    from tb_horario
    where ds_horario = ?`;
    const [resposta] = await con.query(comando,[hora]);
    return resposta[0];
}

export async function inserirUmaHora(idsala, idhora){
    const comando=
        `insert into tb_sala_horario(id_sala,id_horario)
        values(?,?)`;
        const [resposta] = await con.query(comando,[idsala,idhora]);
        return resposta.insertId
}