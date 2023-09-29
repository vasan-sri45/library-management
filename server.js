require('dotenv').config();
const database = require('./database/mongo');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');


const adminRouter = require('./routes/admin/admin-router');
const userRouter = require('./routes/users/user-router');
const bookRouter = require('./routes/books/book-router');

// port number

const Port = process.env.PORT || 5001;

// database connection

database();

// middleware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());



// routes
app.use('/api',adminRouter);
app.use('/api',userRouter);
app.use('/api',bookRouter);

app.listen(Port,()=>{
    console.log('server is updated');
});
