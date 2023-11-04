import { parseJSONBody, replaceUndefinedBody } from './middlewares';
import { getData, getUser, handleForm, renderForm } from './actions/form.actions';
import http from 'http';
import express from 'express';
import { conn } from './db';

/**
 *! Distributed Applications
 ** Name: Iman Emadi
 ** Matriculation number: 1452312
 *? Date: 04/11/2023
 */

// ** ------------------Bootstrapping Node.js Server------------------------
const app = express();
app.use(parseJSONBody, replaceUndefinedBody);
app.use(express.urlencoded({ extended: true }));
app.get("/", renderForm); // registering routes and assigning request handlers to them
app.post('/user', handleForm);
app.get('/user', getUser);
app.get("/getData", getData);

http.createServer({}, app);

// listening on port 80, on localhost
const server = app.listen(80, () => console.log(`Server started. listening on port 80`));

// ** --------------------------------------------------------------------------


for (const signal of ["SIGINT", "SIGTERM"]) {
    // Use once() so that double signals exits the app
    process.once(signal, () => {
        console.log('DISPOSING OF MYSQL CONNECTION!');
        server.close();
        conn.end();
    })
}

