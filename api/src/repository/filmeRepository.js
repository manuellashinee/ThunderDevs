import {con} from './connection.js'

export async function CadastroFilme(filme){
    const comando= `insert into TB_FILME(id_franquia, id_genero,NM_FILME,NR_DURACAO,NR_CLASSIFICACAO,DT_LANCAMENTO,NM_ATOR,NR_TOMATO_METER,NR_AUDIENCE_SCORE,DS_SINOPSE,NM_DIRETOR,VL_AVALIACAO,BT_DESTAQUE,DS_SITUACAO)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const [linhas] = await con.query(comando, [filme.idfranquia,filme.idgenero,filme.nome, filme.duracao,filme.classificacao,filme.lancamento,filme.ator,filme.tomato,filme.audience,filme.sinopse,filme.diretor,filme.avaliacao,filme.destaque,filme.situacao])
    return linhas[0]
}