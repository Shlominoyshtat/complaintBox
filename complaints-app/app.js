import express from 'express';
import router, { checkPassword } from './routes/complaints.js';

const server = express()

server.use(express.static('public'))

server.use(express.json())

server.use(express.urlencoded({ extended: true}));

server.use('/idf/admin',checkPassword)

server.use('/idf',router)



server.listen(3000, () => console.log('the server listening...'))