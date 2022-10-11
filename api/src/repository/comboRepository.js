import {con} from './connection.js'

export async function inserirCombo(combo){
    const comando=`insert into tb_combo(NM_COMBO,DS_COMBO,VL_PRECO)
                    values(?, ?, ?)`;
    const [resposta]= await con.query(comando, [combo.nome, combo.descricao, combo.preco])
    return resposta.insertId;
}

export async function pesquisarCombos(){
    const comando= `select 	
                        ID_COMBO as idcombo,
                        NM_COMBO as nome,
                        DS_COMBO as descricao,
                        VL_PRECO as preco,
                        IMG_COMBO as foto
                    from tb_combo`;
    const [resposta] = await con.query(comando,[]);
    return resposta;
}