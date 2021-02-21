require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT
class Server {

    constructor() {
        this.app = express()

        //Middlewares
        this.middlewares();

        //routes
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json())


        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/users', require('../routes/user'))
    }

    listen() {
        this.app.listen(port, () => {
            console.log(`Listening at the port http://localhost:${port}`);
        })
    }
}

module.exports = Server;