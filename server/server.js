'use strict';

import express from 'express';
import fs from 'fs';
import betterOpn from 'better-opn';
import userRouter from './routes/userRoutes.js';
//import userRouter from './routes/index.js';

import database from './db/connection.js';

const pathLog = './log/access.log';
const pathErr = './log/error.log';

const server = express();

  server.use((request, response, next) => {
    // console.log(`Pfad wurde nicht gefunden: ${request.url}`);
    // Der geladene Pfad soll in eine Text-Datei ausgegeben werden
    let logContent = `${new Date().toLocaleString()} - ${request.url}\n`;

    // NodeJS bezieht seine Pfade immer auf das Betriebssystem
    // Ordner werden nicht automatisch angelegt
    fs.appendFile(
        pathLog,
        logContent,
        err => {
            if (err) {
                console.warn(err);
                response
                    .status(500)
                    .send('Interner Fehler auf dem Server');
            }
            else next();
        }
    )
}) 

server.use(express.static('../client', {
    extensions: ['html'] }));

/*
server.use((request, response, next) => {

    // console.log(`Pfad wurde nicht gefunden: ${request.url}`);
    // Der geladene Pfad soll in eine Text-Datei ausgegeben werden
    let logContent = `${new Date().toLocaleString()} - ${request.url} - 404\n`;

    // NodeJS bezieht seine Pfade immer auf das Betriebssystem
    // Ordner werden nicht automatisch angelegt
    fs.appendFile(
        pathErr,
        logContent,
        err => {
            if (err) {
                console.warn(err);
                response
                    .status(500)
                    .send('Interner Fehler auf dem Server');
            } else {
                response
                    .status(404)
                    .send(`
                    <h1>404</h1>
                    Pfad <strong>${request.url}</strong> wurde nicht gefunden. 
                    <h2>Fettes Sorry!<h2>
                    <img width="200" src="https://img.freepik.com/vektoren-kostenlos/hoppla-404-fehler-mit-einer-kaputten-roboterkonzeptillustration_114360-5529.jpg">
                `)
            }
          
        }
    )
}
)  */
server.use(express.json());
server.use(userRouter);
//
const init = () => {
    // Erste die Datenbanken erzeugen ...
    database.init().then(
        () => {
            // .. dann den Webserver starten
            server.listen(3000, err => {
                if (err) console.log(err);
                else{
                    console.log('Server läuft');
                    betterOpn('http://localhost:3000');
                } 
            });
        }
    )
}



init();
