const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send('嘻嘻')
}) 

app.listen(3000,() => {
    console.log('server running at http://127.0.0.1:3000')
})
