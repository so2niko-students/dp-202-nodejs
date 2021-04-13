//HTTP

const http = require('http');//HTTP-модуль
const url = require('url');//url parser module
const { sum } = require('./func');

//Создать сервер
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    const [a, b] = req.url.split('/').slice(1);
    const query = url.parse(req.url, true).query;
    const { name, surname } = query;
    res.write(`<p>${ a } + ${ b } = ${ sum(a,b) }</p><p>${ name } ${ surname }`);
    res.end();
    console.log('Log in');
    console.log(query);
}).listen(8080);

console.log('Server on http://localhost:8080');

// ?task=1&w=4&l=10&s=o
// ?task=2&a=4&b=10&c=11&d=43