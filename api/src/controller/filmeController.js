import { Router } from 'express';
const server = Router();

import multer from "multer" ;
const upload = multer({dest: 'storage/fotosfilmes'}) 

server.post('/adm/filme', async (req, resp) =>{
    
})

export default server;
