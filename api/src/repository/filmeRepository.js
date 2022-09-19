import {con} from './connection.js'

export async function CadastroFilme(franquia,genero,nome, duracao,calssificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao){
    const comando= `insert into TB_FILME(id_franquia, id_genero,NM_FILME,NR_DURACAO,NR_CLASSIFICACAO,DT_LANCAMENTO,NM_ATOR,NR_TOMATO_METER,NR_AUDIENCE_SCORE,DS_SINOPSE,NM_DIRETOR,VL_AVALIACAO,BT_DESTAQUE,DS_SITUACAO)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const [linhas] = await con.query(comando, [franquia,genero,nome, duracao,calssificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao])
    return linhas[0]
}