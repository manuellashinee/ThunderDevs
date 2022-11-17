import { Router } from 'express';
import multer from "multer" ;
import { inserirCombo, pesquisarComboId, pesquisarComboNome, pesquisarCombos, removerCombo, alterarImagemCombo, alterarCombo, verPedidosCombo, deletarPagamentoCombo, deletarPedidoCombo } from '../repository/comboRepository.js';
const server = Router();
const upload = multer({dest: 'storage/fotosfilmes'}) 

server.post('/adm/combo', async (req,resp)=>{
    try{

      
      
    const combo = req.body;
    if(!combo.nome)
    throw new Error('Nome é obrigatório');
    if(!combo.descricao)
    throw new Error('Descrição é obrigatório');
    if(!combo.preco)
    throw new Error('Informar o preço é obrigatório');
    const idcombo = await inserirCombo(combo);
    resp.send({ 
        id: idcombo
     });
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/adm/combo', async (req,resp)=>{
    try{
    const resposta = await pesquisarCombos();
    resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/adm/combo/nome', async (req, resp)=>{
    try{
        const {nome} = req.query;
        const resposta = await pesquisarComboNome(nome);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.get('/consulta/combo/:id', async (req, resp)=>{
    try{
        const {id} = req.params;
        const resposta = await pesquisarComboId(id);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.delete('/adm/combo/:id', async (req, resp)=>{
    try{
        const  {id} = req.params;

        const idsPedidos = await verPedidosCombo(id);
    
        for(let i=0; i<idsPedidos.length;i++){
            const x=await deletarPagamentoCombo(idsPedidos[i].idpedidocombo)
        }
        const remove2= await deletarPedidoCombo(id);
        const remove = await removerCombo(id);
        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/adm/combo/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        if (!req.file)
            throw new Error('Escolha a imagem do Combo.');

        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagemCombo(imagem, id);
        
        resp.status(204).send();
    }catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.put('/adm/combo/:id', async (req, resp ) =>{
    try{
        const id= req.params.id;
        const combo = req.body;

        const alteracao= await alterarCombo(combo, id);
       if(alteracao === 1){
        resp.status(204).send();
       }
       else{
        throw new Error('Combo não pode ser alterado')
       }
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
} )

server.get('/adm/combo/:id', async (req, resp)=>{
    try{
        const idcombo= req.params.id;
        const resposta = await pesquisarComboId(idcombo);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})

server.get('/consulta/nome/combo', async (req, resp)=>{
    try{
        const {nome} = req.query;
        const resposta = await pesquisarComboNome(nome);
        resp.send(resposta);
    }
        catch (err) {
            return resp.status(400).send({
                erro: err.message
            })
        }
})




export default server;