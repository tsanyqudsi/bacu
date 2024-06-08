import { server } from "./server";
import './middlewares/index'
import './routes'

server(process.env.PORT)
