const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mysql = require('mysql')

const connect = mysql.createConnection(({

    host: '127.0.0.1',
    user:'root',
    password:'',
    database: 'cadastro'

}))

const dependencies = {
    connect
}

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => res.render('home'))

const pessoas = require('./router/pessoas')
app.use('/pessoas', pessoas(dependencies))

connect.connect(() => {
    app.listen(port,()  => console.log('Start') )
})
