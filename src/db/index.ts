import sql from 'mysql';
/**
 *! Distributed Applications
 ** Name: Iman Emadi
 ** Matriculation number: 1452312
 *? Date: 07/11/2023
 */
const dev = false;

const conn = sql.createConnection({
    host: dev ? 'localhost' : 'da-mysql.mysql.database.azure.com',
    user: dev ? 'root' : 'iman',
    password: dev ? 'root' : '*******',
    database: dev ? 'distributed_apps' : 'distributed_apps',
    port: 3306,
    ssl: {
        rejectUnauthorized: false
    }
});

export { conn };