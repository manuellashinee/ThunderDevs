import { Router } from 'express';
const server = Router();


server.post('/usuario/login' , async (req, resp) => {
    try{
        const {email, senha } = req.body;
        const resposta = await logi;
        if(!resposta) throw new error('Credenciais inválidas!')
        resp.send(resposta)

    }catch(err) {
        resp.status(401).send({
            erro:err.message
        });
    
    }
})


export default server;