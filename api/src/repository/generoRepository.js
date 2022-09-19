import {con} from './connection.js'

export async function consultaGenero(){
    const comando= `select * from tb_genero`;
    const [linhas] = await con.query(comando, [])
    return linhas[0]
}