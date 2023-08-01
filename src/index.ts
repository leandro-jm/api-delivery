import { App } from "./app"
import dotenv from 'dotenv';

dotenv.config();

new App().server.listen(process.env.PORT);