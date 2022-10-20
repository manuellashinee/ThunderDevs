import { api } from "./url.js";

export async function cadastrarUsuario(usuario, nome, telefone, email, senha, nascimento, cpf, rg){
    const resposta= await api.post ('/usuario', {
        usuario : usuario,
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
        nascimento: nascimento,
        cpf: cpf,
        rg: rg
    });
 return resposta.data;
}