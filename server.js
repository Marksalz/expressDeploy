import express from 'express';
import usersRouter from './router.js';


const server = express();
server.use(express.json());

server.use('/users', usersRouter);



server.listen(3000, () => console.log('Listening on port 3000'));












// import express from "express";
// const PORT = 4545;

// const server = express();

// function logger(req, res, next) {
//     req.startTime = new Date().toLocaleString();
//     console.log(`request with ${req.method} method, url: ${req.url}\nstartTime: ${req.startTime}`);
//     next();
// }

// server.use(express.json(), logger);

// server.get('/home', (req, res) => {
//     res.send("hi from /home")
// });
// server.get('/json', (req, res) => {
//     res.send("hi from /json")
// });

// server.post('/student', (req, res) => {
//     console.log(`got student: ${JSON.stringify(req.body)}`);
//     res.send(`got name: ${req.body.name}`);
// });


// server.listen(PORT, () => {
//     console.log(`express server listening on port: ${PORT}`);
// })