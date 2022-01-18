import express from 'express';
import "reflect-metadata";
import "./database";
import { router } from './routes';

const app = express();
const SERVER_PORT = 3001;

app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: `Internal server error - ${err.message}`,
        status: "error"
    });
});

app.listen(SERVER_PORT, () => {console.log(`Server started on port ${SERVER_PORT}.`)});