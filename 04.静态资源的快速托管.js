const express = require('express')
const app = express()

app.use(express.static('./view'))
app.use('/css',express.static('./css'))
app.use('/js',express.static('./js'))

app.listen(3000,() =>{
    console.log('server running at http://127.0.0.1:3000')
})