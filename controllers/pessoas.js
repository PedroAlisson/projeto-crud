const pessoas = require('../models/pessoas')
//criando o metodo index para mostrar os dados
const index = async(connect, req, res) => {    
    //criando uma variavel e chamado o metodo que está no model que tras todas as pessoas
    const results = await pessoas.findAll(connect)
    res.send(results)   
}

module.exports ={index}