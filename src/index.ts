import { server } from "./server";
import './routes'
import './middlewares/index'

server(process.env.PORT)
