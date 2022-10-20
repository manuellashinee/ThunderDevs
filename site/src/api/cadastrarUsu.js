import { api } from "./url.js";

export async function cadastrarUsuario(usuario, nome, telefone, email, senha, nascimento, cpf, rg){
    const resposta= await api.post ('/usuario', {usuario,nome,telefone,email,senha,nascimento,cpf,rg });
    return resposta.data;
}