'use strict';

import express from 'express';
import fs from 'fs';

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

server.use(express.static('../client'));

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

})

const init = () => {
    server.listen(3000, err => {
        if (err) console.warn(err);
        else console.log('Server ist bereit');
    })
}

init();