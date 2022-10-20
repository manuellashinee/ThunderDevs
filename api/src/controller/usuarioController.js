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

        const idusuario = await cadastroUsuario(usuario);

        resp.send({ 
            id: idusuario
         });
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;