import {con} from './connection.js'

export async function cadastroFilme(filme){
    const comando= `insert into TB_FILME(id_franquia, id_genero,NM_FILME,NR_DURACAO,NR_CLASSIFICACAO,DT_LANCAMENTO,NM_ATOR,NR_TOMATO_METER,NR_AUDIENCE_SCORE,DS_SINOPSE,NM_DIRETOR,VL_AVALIACAO,BT_DESTAQUE,DS_SITUACAO)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const [linhas] = await con.query(comando, [filme.idfranquia,filme.idgenero,filme.nome, filme.duracao,filme.classificacao,filme.lancamento,filme.ator,filme.tomato,filme.audience,filme.sinopse,filme.diretor,filme.avaliacao,filme.destaque,filme.situacao])
    return linhas.insertId;
}

export async function alterarImagem(imagem, id) {
    const comando =
    `UPDATE tb_filme 
        SET img_capa    = ?
    WHERE id_filme      = ?`;

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

export async function consultarTodosFilme(){
    const comando= 
    `   select 
            ID_FILME as id,
            ID_FRANQUIA as franquia,
            tb_FILME.id_genero as idgenero,
            NM_GENERO as genero
            NM_FILME as nome,
            NR_DURACAO as duracao,
            NR_CLASSIFICACAO as classificacao,
            DT_LANCAMENTO as lancamento,
            NM_ATOR as ator,
            NR_TOMATO_METER as tomato,
            NR_AUDIENCE_SCORE as audiencia,
            DS_SINOPSE as sinopse,
            IMG_CAPA as capa,
            NM_DIRETOR as diretor,
            VL_AVALIACAO  as avaliacao,
            BT_DESTAQUE as destaque,
            DS_SITUACAO as situacao 
        from tb_FILME
        inner join tb_genero on tb_genero.id_genero = tb_filme.id_genero`;

    const [resposta] = await con.query(comando)
    return resposta;
}

export async function consultarFilmeGenero(idgenero){
    const comando= `select  
                        ID_FILME as id,
                        ID_FRANQUIA as franquia,
                        ID_GENERO as genero,
                        NM_FILME as nome,
                        NR_DURACAO as duracao,
                        NR_CLASSIFICACAO as classificacao,
                        DT_LANCAMENTO as lancamento,
                        NM_ATOR as ator,
                        NR_TOMATO_METER as tomato,
                        NR_AUDIENCE_SCORE as audiencia,
                        DS_SINOPSE as sinopse,
                        IMG_CAPA as capa,
                        NM_DIRETOR as diretor,
                        VL_AVALIACAO  as avaliacao,
                        BT_DESTAQUE as destaque,
                        DS_SITUACAO as situacao 
                    from tb_FILME
                    where id_genero = ?;`;
    const [resposta] = await con.query(comando,  [idgenero])
    return resposta;
}

export async function consultarFilmeFranquia(idfranquia){
    const comando= `select  
                        ID_FILME as id,
                        ID_FRANQUIA as franquia,
                        ID_GENERO as genero,
                        NM_FILME as nome,
                        NR_DURACAO as duracao,
                        NR_CLASSIFICACAO as classificacao,
                        DT_LANCAMENTO as lancamento,
                        NM_ATOR as ator,
                        NR_TOMATO_METER as tomato,
                        NR_AUDIENCE_SCORE as audiencia,
                        DS_SINOPSE as sinopse,
                        IMG_CAPA as capa,
                        NM_DIRETOR as diretor,
                        VL_AVALIACAO  as avaliacao,
                        BT_DESTAQUE as destaque,
                        DS_SITUACAO as situacao 
                    from tb_FILME
                    where id_franquia = ?;`;
    const [resposta] = await con.query(comando, [idfranquia])
    return resposta;
}

export async function removerFilme(id){
    const comando= `    
                    delete from tb_filme 
                        where id_filme = ? `;
    const [resposta] = await con.query(comando, [id])
    return resposta;
}

export async function alterarFilme(filme, idfilme){
    const comando= `  
                UPDATE TB_filme 
	                SET
                    ID_FRANQUIA= ?,
                    ID_GENERO= ? ,
                    NM_FILME= ?,
                    NR_DURACAO= ?,
                    NR_CLASSIFICACAO = ?,
                    DT_LANCAMENTO = ?,
                    NM_ATOR= ?,
                    NR_TOMATO_METER= ?,
                    NR_AUDIENCE_SCORE =? ,
                    DS_SINOPSE= ?,
                    NM_DIRETOR=?,
                    VL_AVALIACAO=?,
                    BT_DESTAQUE = ?,
                    DS_SITUACAO = ?
                WHERE ID_FILME =?`
    const [resposta] = await con.query(comando, [filme.idfranquia,filme.idgenero,filme.nome, filme.duracao,filme.classificacao,filme.lancamento,filme.ator,filme.tomato,filme.audience,filme.sinopse,filme.diretor,filme.avaliacao,filme.destaque,filme.situacao, idfilme])
    return resposta.affectedRows;           
}

export async function pesquisarFilmeNome(nome){
    const comando=` 
                SELECT 
                    ID_FILME as id,
                    ID_FRANQUIA as franquia,
                    tb_FILME.id_genero as idgenero,
                    NM_GENERO as genero,
                    NM_FILME as nome,
                    NR_DURACAO as duracao,
                    NR_CLASSIFICACAO as classificacao,
                    DT_LANCAMENTO as lancamento,
                    NM_ATOR as ator,
                    NR_TOMATO_METER as tomato,
                    NR_AUDIENCE_SCORE as audiencia,
                    DS_SINOPSE as sinopse,
                    IMG_CAPA as capa,
                    NM_DIRETOR as diretor,
                    VL_AVALIACAO  as avaliacao,
                    BT_DESTAQUE as destaque,
                    DS_SITUACAO as situacao 
                from tb_FILME
                inner join tb_genero on tb_genero.id_genero = tb_filme.id_genero
                where NM_FIlME like "${nome}%" `;

    const [resposta] = await con.query(comando, [nome])
    return resposta;         
}

export async function consultarFilmeId(idfilme){
    const comando= `select  
                        ID_FILME as id,
                        ID_FRANQUIA as franquia,
                        ID_GENERO as genero,
                        NM_FILME as nome,
                        NR_DURACAO as duracao,
                        NR_CLASSIFICACAO as classificacao,
                        DT_LANCAMENTO as lancamento,
                        NM_ATOR as ator,
                        NR_TOMATO_METER as tomato,
                        NR_AUDIENCE_SCORE as audiencia,
                        DS_SINOPSE as sinopse,
                        IMG_CAPA as capa,
                        NM_DIRETOR as diretor,
                        VL_AVALIACAO  as avaliacao,
                        BT_DESTAQUE as destaque,
                        DS_SITUACAO as situacao 
                    from tb_FILME
                    where id_filme = ?;`;
    const [resposta] = await con.query(comando,  [idfilme])
    return resposta;
}