// Required modules
import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import connectDB from "./db.js";
import cookieParser from 'cookie-parser';
import biodata from './routs/api/biodata.js';
import users from './routs/api/users.js';
import messages from './routs/api/messages.js';
import cors from 'cors';

// Env configuration 
dotenv.config();

// Database connection
connectDB();

// Express & App initialization
const app = express();

// Middlewares
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors({ origin: '*' }));
app.use(cookieParser());
app.use('/static', express.static('uploads'));

// Routes
app.get('/', (req, res) => {
    res.send('This is running!');
});

app.use('/api/user', jsonParser, biodata);
app.use('/api/users', jsonParser, users);
app.use('/api/messages', jsonParser, messages);

// Listning server
const port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log(`The pakhi bhai server is running at port ${port}`);
});

process.on('SIGINT', function() {
    console.log('Do something useful here.');
    server.close();
    process.exit();
});