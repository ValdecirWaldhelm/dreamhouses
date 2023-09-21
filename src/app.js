import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config()
import cors from 'cors';
import path from 'path';
import routes from './routes';


class App{

    constructor(){
        this.server = express();

        const DB_USER = process.env.DB_USER;
        const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

        mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.dqagaxv.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        )

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }


}

export default new App().server;
