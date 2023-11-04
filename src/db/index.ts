import sql from 'mysql';
/**
 *! Distributed Applications
 ** Name: Iman Emadi
 ** Matriculation number: 1452312
 *? Date: 04/11/2023
 */
const dev = true;

const conn = sql.createConnection({
    host: dev ? 'localhost' : 'example-server.mysql.database.azure.com',
    user: dev ? 'root' : 'username',
    password: dev ? 'root' : 'database_password',
    database: dev ? 'distributed_apps' : 'db_name',
    port: 3306,
    ssl: {
        rejectUnauthorized: false
    }
});

export { conn };