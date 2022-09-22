import axios from "axios" ;


export async function confirmarFilme(franquia,genero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao){
    const asnwer = await axios.post('http://localhost:5000/adm/filme', {franquia,genero,nome,duracao,classificacao,lancamento,ator,tomato,audience,sinopse,diretor,avaliacao,destaque,situacao});
    return asnwer.data;
}
