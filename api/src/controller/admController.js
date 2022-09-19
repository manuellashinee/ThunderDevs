
import { loginAdm } from "../repository/admRepository.js";
import { Router } from 'express';
const server = Router();

server.post('/adm/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await loginAdm(email,senha);

        if (!resposta) {
            throw new Error('Credenciais inválidas!')
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