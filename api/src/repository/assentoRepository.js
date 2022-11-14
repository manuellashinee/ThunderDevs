import {con} from './connection.js'

export async function VerTassentos(){
    const comando= `select id_assento idassento,
                    ds_fileira fileira,
                    nr_assento assento 
                    from tb_assento
                    order by 2,1`;
    const [linhas] = await con.query(comando, [])
    return linhas;
}


export async function assentosOcupados(idfilme,horario,sala){
    const comando= `select tb_assento.id_assento idassento,
                    ds_fileira fileira,
                    nr_assento assento
                    from tb_ingresso_assento
                    Inner join tb_assento on tb_assento.id_assento= TB_ingresso_assento.id_assento
                    inner join tb_ingresso on  TB_ingresso_assento.id_ingresso= tb_ingresso.id_ingresso
                    where id_filme= ? and ds_horario = ? and nr_sala = ?
                    order by 2,1;`;
    const [linhas] = await con.query(comando, [idfilme,horario,sala])
    return linhas;
}
