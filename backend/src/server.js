require('dotenv').config();
const app = require('./app');
require('./database');

//Funcion para inciar el Servidor
async function main() { 
    await app.listen(app.get('port'));
    console.log('Server on port 8080');
}

//Iniciando el server
main();

