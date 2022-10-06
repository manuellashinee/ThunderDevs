import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import admController from './controller/admController.js';
import usuarioController from './controller/usuarioController.js' ;
import filmeController from './controller/filmeController.js' ;
import franquiaController from './controller/franquiaController.js';
import generoController from './controller/generoController.js' ;
import comentarioController from './controller/comentarioController.js'
import comboController from './controller/comboController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(admController);
server.use(usuarioController);
server.use(filmeController) ;
server.use(franquiaController);
server.use(generoController);
server.use(comentarioController)
server.use(comboController);


server.use('/storage/fotosfilmes', express.static('storage/fotosfilmes'));
 
server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));
