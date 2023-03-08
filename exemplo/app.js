const http = require ('http')

http.createServer(function(res,req){
 res.end('meu primeiro servidor nodejs')
}).listen(8081)

