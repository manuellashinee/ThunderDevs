
import { loginAdm } from "../repository/admRepository.js";
import { Router } from 'express';
const server = Router();

server.post('/login/adm', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await loginAdm(email,senha);

        if (!resposta) {
            throw new Error('Usuário ou senha inválidos!')
        }else{
            resp.status(203).send({
                resposta
            })
        }
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})


export default server;