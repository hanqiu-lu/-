const express = require('express')
const app = express()

// 1定义模板引擎的名称
app.engine('html',require('express-art-template'))
// 2.定义模板引擎的方式
app.set('views engine','html')
// 3.定义views指向的渲染目录
app.set('views','./view')

app.get('/',(req,res) =>{
    // 4.调用render方法进行渲染
    res.render('index2.html',{
        

    })

})
app.listen(3000,() =>{
    console.log('http://127.0.0.1:3000')
})
