import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import admController from './controller/admController.js';
import usuarioController from './controller/usuarioController.js' ;

const server = express();
server.use(cors());
server.use(express.json());

server.use(admController);
server.use(usuarioController);

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));
