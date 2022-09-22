import {con} from './connection.js'

export async function consultaFranquia(){
    const comando= `select 	id_franquia as idfranquia, 
                    nm_franquia as Nome
                    from tb_franquia;`;
    const [linhas] = await con.query(comando, [])
    return linhas;
}