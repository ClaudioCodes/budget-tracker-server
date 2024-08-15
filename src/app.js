const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv');
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require('./routes/users/usersRoute');

const app = express();
// env
dotenv.config();
//dbConnect
dbConnect();

//middlewares
app.use(express.json());

//routes
app.use('/api/users', userRoute);

//Error
app.use(notFound);
app.use(errorHandler);


module.exports = app;