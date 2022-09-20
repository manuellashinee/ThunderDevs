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