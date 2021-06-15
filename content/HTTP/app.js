const http = require('http')

const server = http.createServer((req, res) =>{
    if (req.url) {
        res.write('Welcome to our home page')
    }
    
    if (req.url === '/about'){
        res.end('Here is the about Page')
    }
    res.end(`
    <h1>Ooops!1</h1>
    <p>Site down mantenance ongoing</p>`)
})

server.listen(5000)

