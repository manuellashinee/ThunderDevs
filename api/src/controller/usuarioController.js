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

server.post('/usuario', async (req, resp) =>{
    try{


        const usuario = req.body;
        
        if(!usuario.nome)
        throw new Error('Nome obrigatório');
        if(!usuario.telefone)
        throw new Error('Telefone obrigatório');
        if(!usuario.email)
        throw new Error('Email obrigatório');
        if(!usuario.senha)
        throw new Error('Senha obrigatório');
        if(!usuario.cpf)
        throw new Error('Cpf obrigatório');
        if(!usuario.rg)
        throw new Error('rg obrigatório');
    
        const user= await cadastroUsuario(usuario);


        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;