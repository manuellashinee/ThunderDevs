import {con} from './connection.js'

export async function consultaFranquia(){
    const comando= `select * from tb_franquia`;
    const [linhas] = await con.query(comando, [])
    return linhas[0]
}