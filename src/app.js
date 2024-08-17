const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require('./routes/users/usersRoute');
const incomeRoute = require('./routes/income/incomeRoutes');

const app = express();
// env
dotenv.config();

//dbConnect
dbConnect();

//middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg:'Welcome Expenses tracker API'})
})

//User routes
app.use('/api/users', userRoute);

//Income Routes
app.use('/api/income', incomeRoute);

//Error
app.use(notFound);
app.use(errorHandler);


module.exports = app;