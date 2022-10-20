import { con } from './connection.js'

export async function loginUsu(email, senha){
     const comando = 
     `
    SELECT ID_USUARIO 		   id,
        NM_USUARIO	         nome,
        DS_EMAIL		     email
    FROM TB_USUARIO
    WHERE DS_EMAIL 	        = ?
    AND DS_SENHA	        = ?  `;

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0]
}

export async function cadastroUsuario(usuario){
    const comando= `insert into TB_USUARIO(NM_USUARIO,DS_TELEFONE,DS_EMAIL,DS_SENHA,DT_NASCIMENTO,DS_CPF,DS_RG)
	values(?,?,?,?,?, ?,?) `
    const [linhas] = await con.query(comando, [usuario.nome , usuario.telefone ,usuario.email, usuario.senha, usuario.nascimento, usuario.cpf, usuario.rg  ])
    return linhas.insertId;
}