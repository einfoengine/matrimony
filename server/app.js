import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import connectDB from "./db.js";
import cookieParser from 'cookie-parser';

import biodata from './routs/api/biodata.js';
import users from './routs/api/users.js';
import messages from './routs/api/messages.js'




dotenv.config(); // Function invocation
import cors from 'cors';

// Connection
connectDB();
const app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',(req,res)=>{
    res.send('This is running!')
})
app.use(cors({
    origin: "http://151.106.113.176:3000"
}));

// Router
// ===
// Users
app.use(cookieParser());
app.use('/static', express.static('uploads'))
app.use('/api/user', jsonParser, biodata);
app.use('/api/users', jsonParser, users);
// Message
app.use('/api/messages', jsonParser, messages);

// Listining
// ===
const port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log(`The pakhi bhai server is running at port ${port}`);
});

process.on('SIGINT', function() {
    console.log('Do something useful here.');
    server.close();
    process.exit()
});