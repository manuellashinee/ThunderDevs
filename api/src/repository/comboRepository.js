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

export async function pesquisarComboNome(nome){
    const comando=` 
                SELECT 
                    ID_COMBO as idcombo,
                    NM_COMBO as nome,
                    DS_COMBO as descricao,
                    VL_PRECO as preco,
                    IMG_COMBO as foto
                    from tb_combo
                    where NM_combo like "%${nome}%" `;

    const [resposta] = await con.query(comando, [nome])
    return resposta;         
}

export async function pesquisarComboId(id){
    const comando=` 
                SELECT 
                    ID_COMBO as idcombo,
                    NM_COMBO as nome,
                    DS_COMBO as descricao,
                    VL_PRECO as preco,
                    IMG_COMBO as foto
                    from tb_combo
                    where id_combo = ? `;

    const [resposta] = await con.query(comando, [id])
    return resposta[0];         
}

export async function removerCombo(id){
    const comando= `    
                    delete from tb_combo 
                        where id_combo = ? `;
    const [resposta] = await con.query(comando, [id])
    return resposta;
}

export async function alterarImagemCombo(imagem, id) {
    const comando =
    `UPDATE tb_combo 
        SET img_combo   = ?
    WHERE id_combo      = ?`;

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}


export async function alterarCombo(combo, idcombo){
    const comando= `  
                UPDATE TB_COMBO
	                SET
                    NM_COMBO =   ?,
                    DS_COMBO = ?,
                    VL_PRECO =  ?
                WHERE ID_COMBO =?`
    const [resposta] = await con.query(comando, [combo.nome, combo.descricao, combo.preco, idcombo])
    return resposta.affectedRows;  
}
