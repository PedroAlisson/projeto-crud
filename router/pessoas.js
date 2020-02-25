const express = require('express')
const PessoasController = require('../controllers/pessoas')

const pessoasRouter = ({connect}) =>{
    const router = express.Router()
    //criando uma rota passando a conexao com o banco para o metodo index no controller
    router.get('/', PessoasController.index.bind(null, connect))
    return router
}

module.exports = pessoasRouter