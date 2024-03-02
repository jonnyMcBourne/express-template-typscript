require('dotenv').config();
import {server as Server} from './models/Server';
const server = new Server();

server.listen();