const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require('./routes/users/usersRoute');
const incomeRoute = require('./routes/income/incomeRoutes');
const expenseRoute = require('./routes/expenses/expenseRoutes');

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

//Expense Routes
app.use("/api/expenses", expenseRoute);
//Error
app.use(notFound);
app.use(errorHandler);


module.exports = app;