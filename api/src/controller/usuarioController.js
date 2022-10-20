import { Router } from 'express';
import { loginUsu, cadastroUsuario } from '../repository/usuarioRepository.js';
const server = Router();


server.post('/usuario/login' , async (req, resp) => {
    try{
        const { email, senha } = req.body;
        const resposta = await loginUsu(email,senha);
        if (!resposta) throw new Error('Credenciais inválidas');
        resp.send(resposta)

    }catch(err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

server.post('/usuario', async (req,resp)=>{
    try{
    const userNovo= req.body;
    if(!userNovo.nome)
    throw new Error('Nome obrigatório');
    if(!userNovo.telefone)
    throw new Error('Telefone obrigatório');
    if(!userNovo.email)
    throw new Error('Email obrigatório');
    if(!userNovo.senha)
    throw new Error('Senha obrigatório');
    if(!userNovo.nascimento)
    throw new Error('Nascimento obrigatório');
    if(!userNovo.cpf)
    throw new Error('Cpf obrigatório');
    if(!userNovo.rg)
    throw new Error('Rg é obrigatório');

    const user= await cadastroUsuario(userNovo);

    if(user===1)
    resp.status(204).send();
    else{
        throw new Error('Não cadastrado')
    }

}catch(err){
    console.log(err)
    resp.status(400).send({
        erro:err.message
    });
}
})


export default server;