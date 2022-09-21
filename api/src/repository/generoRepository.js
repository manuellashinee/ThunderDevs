import {con} from './connection.js'

export async function consultaGenero(){
    const comando= `select 	id_genero as idgenero, 
                    nm_genero as Nome
                    from tb_genero;`;
    const [linhas] = await con.query(comando, [])
    return linhas;
}