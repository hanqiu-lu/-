// 导入
const http = require('http')

const server = http.createServer()

server.on('request',(req,res) =>{
    // 发送字符串
   res.end('哈哈哈')   
    //发送数组
    // res.send(['嘻嘻','嘿嘿','哒哒'])
    // 发送对象
    // res.send({name:'li',age:'22'})    
}) 

server.listen(3000,() =>{
    console.log('server running at http://127.0.0.1:3000')
})


