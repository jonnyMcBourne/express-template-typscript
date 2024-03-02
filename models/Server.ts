import express from "express"
import { Express } from  "express"
import  cors  from "cors" // Cross-origin resource sharing library
import  morgan from 'morgan'; // library for loggin
import  exampleRoutes from "../routes/example-routes";
//config
import * as dotenv from "dotenv" // enable .env
dotenv.config()

export class server{
    port : string | number; 
    app: Express

    constructor(){
        this.app = express();
        this.port  = process.env.PORT||3000; 
        this.runCors();
        this.middlewares();  
        this.routes();
    }
    runCors(){
        this.app.use(cors());
      }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes() {
        this.app.use(exampleRoutes)
        //this.app.use(this.auth,require('../path'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("server running at port",this.port);
        })
    }
}

