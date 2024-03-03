require('dotenv').config();
import {server as Server} from './src/models/Server';
const server = new Server();

server.listen();