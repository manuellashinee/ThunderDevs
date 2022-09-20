import { Router } from 'express';
import { loginUsu } from '../repository/usuarioRepository.js';
const server = Router();


server.post('/usuario/login' , async (req, resp) => {
    try{
        
        const {email, senha } = req.body;
        
        const resposta = await loginUsu(email,senha);

        if (!resposta) {
            throw new Error('Credenciais inválidas!')
        }else{
            resp.status(204).send()
        }
    
    }catch(err) {
        resp.status(401).send({
            erro:err.message
        });
    
    }
})


export default server;