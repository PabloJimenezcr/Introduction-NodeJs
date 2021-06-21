// CREAR SERVIDOR 

// Corre en el server, no en el navegador

//El require es una libreria, permite buscar otros modulos de js
const http = require('http');

const host = '127.0.0.1'
const port = 3000;

// req Recibe el api y res Retonar el api
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world of Java');
});

server.listen(port, host, () =>{
    console.log(`Servidor corriendo en ${host}:${port}`);
});