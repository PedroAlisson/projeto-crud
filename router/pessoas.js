const express = require('express')


const pessoasRouter = ({connect}) =>{
    const router = express.Router()
    router.get('/', (req,res) =>{
        connect.query('select * from pessoas', (err, results) => {
            res.send(results)
        })
    })
    return router
}

module.exports = pessoasRouter