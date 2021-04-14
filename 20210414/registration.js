const http = require('http');
const url = require('url');
const fs = require('fs');//filesystem

http.createServer((req, res) => {
    //Получение данных
    const { login, password, type } = url.parse(req.url, true).query;
    
    //Обработка данных

    switch(type){
        case 'registration' : {
            addNewUser(login, password);
            break;
        }
        case 'read' : {
            fs.readFile('users.txt', (err, data) => {
                answer(res, data);
            });
            break;
        }
        case 'rename' : {
            fs.rename('users.txt', 'app2021/lemon3.txt', err => {
                console.log('Renamed');
                answer(res, 'Renamed');
            });
        }
        default:{
            answer(res, 'Error in request type');
        }
    }
}).listen(8080);

console.log('Server started on 8080 port');

function addNewUser(login, password){
    const data = `
login: ${ login }
password: ${ password }
---`;

    //Обработка данных
    fs.appendFile('app2021/users.txt', data, err => {
        console.log('Add new user');
        answer('Add new user');
    });
}

//appendFile - добавление в конец файла (если файла нет - создаёт)
//readFile - чтение (если файла нет - создаёт)
//writeFile - запись/перезапись (если файла нет - создаёт)
//rename - переименование и/или перемещение
//unlink -- удаление

function answer(res, data){
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    res.write(data);
    res.end();
}