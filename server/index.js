import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://todo-app-theta-gules.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors(
    {
        origin:["https://todo-app-theta-gules.vercel.app"],
        methods:['POST','GET'],
        credentials:true
    }
));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));