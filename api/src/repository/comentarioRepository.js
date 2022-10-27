import {con} from './connection.js'

export async function inserirComentario(idfilme,comentario){
    const comando= `insert into tb_comentario(ID_FILME,id_usuario,DS_FRASE,NR_AVALIACAO)
                    values(?,?,?,?)`;
    const resposta= await con.query(comando, [idfilme,comentario.idusuario, comentario.frase, comentario.avaliacao])
    return resposta;
}

export async function vizualizarComentarios(idfilme){
    const comando= `select 
                        id_comentario as id,
                        tb_comentario.id_filme as idfilme,
                        tb_comentario.id_usuario as idusuario,
                        nm_usuario as nome,
                        nm_filme as filme,
		                img_capa as capa,
                        ds_frase as frase,
                        nr_avaliacao as avaliacao
                    from tb_comentario
                    inner join tb_usuario on tb_usuario.id_usuario = tb_comentario.id_usuario
                    inner join tb_filme on tb_filme.id_filme = tb_comentario.id_filme
                    where tb_comentario.id_filme=?`;
    const [resposta]= await con.query(comando, [idfilme])
    return resposta;
}