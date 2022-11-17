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
    `   SELECT 
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
    inner join tb_genero on tb_genero.id_genero = tb_filme.id_genero`;

    const [resposta] = await con.query(comando)
    return resposta;
}

export async function consultarFilmeGenero(idgener){
    const comando= `SELECT 
                    ID_FILME as id,
                    ID_FRANQUIA as franquia,
                    TB_FILME.id_genero as idgenero,
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
                    where tb_filme.id_genero = ?;`;
    const [resposta] = await con.query(comando,  [idgener])
    return resposta;
}

export async function consultarFilmeFranquia(idfranquia){
    const comando= `SELECT 
                    ID_FILME as id,
                    tb_filme.ID_FRANQUIA as idfranquia,
                    NM_franquia as franquia,
                    id_genero as idgenero,
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
                    inner join tb_franquia on tb_franquia.id_franquia = tb_filme.id_franquia
                    where tb_filme.id_franquia = ?;`;
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
                        tb_filme.ID_FRANQUIA as franquia,
                        tb_filme.ID_GENERO as genero,
                        NM_FILME as nome,
                        NM_FRANQUIA as nomefranquia,
                        NM_GENERO as nomegenero,
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
                    inner join tb_franquia on tb_franquia.id_franquia = tb_filme.id_franquia
                    inner join tb_genero on tb_genero.id_genero = tb_filme.id_genero
                    where tb_filme.id_filme = ?;`;
    const [resposta] = await con.query(comando,  [idfilme])
    return resposta;
}

export async function filmeEmBreve(){
    const comando=` 
            select ID_FILME as id,
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
            where DT_LANCAMENTO > now()`;

    const [resposta] = await con.query(comando, [])
    return resposta;         
}

export async function filmeEmCartaz(){
    const comando=` 
            select ID_FILME as id,
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
            where DS_SITUACAO = 'ATIVO'`;

    const [resposta] = await con.query(comando, [])
    return resposta;         
}


export async function filmeDestaque(){
    const comando=` 
            select ID_FILME as id,
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
            where BT_DESTAQUE = 1`;

    const [resposta] = await con.query(comando, [])
    return resposta;         
}



export async function removerFilmeSala(idfilme){
    const comando= `delete from tb_filme_sala where id_filme = ?`;
    const [resposta]= await con.query(comando, [idfilme])
    console.log(resposta)
    return resposta.insertId;
}




export async function removerFilmeSalaHora(idfilmesala){
    const comando= `delete from tb_filme_sala_horario where id_filme_sala = ?`;
    const [resposta]= await con.query(comando, [idfilmesala])
    return resposta.affectedRows;
}

export async function verIDFilmeSala(idfilme){
    const comando= `select id_filme_sala idsala
    from tb_filme_sala
    where id_filme=?`;
    const [resposta]= await con.query(comando, [idfilme])
    return resposta;
}


//select idingresso where id_filme 