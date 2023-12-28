import app from './app.js'
import {connect} from './db.js'
import { PORT } from './config.js';

connect();



app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});