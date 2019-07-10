const express = require('express')

const app = express()
// console.log(app)

app.get('/',(req,res) =>{
    res.send('haha')
})

app.listen(3000,() =>{
    console.log('server running at http://127.0.0.1:3000')
})