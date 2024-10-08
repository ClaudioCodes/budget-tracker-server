const expressAsyncHandler = require('express-async-handler');
const Expense = require('../../model/expense');

//Create
const createExpCtrl = expressAsyncHandler(async (req, res) => {
    const { title, amount, description, user } = req.body;
    try {
        const expense = await Expense.create({
            title,
            amount,
            description,
            user,
        });
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//Fetch all income
const fetchAllExpCtrl = expressAsyncHandler(async (req, res) => {
    const { page } = req.query
    try {
        const expense = await Expense.paginate({},{limit: 10, page: Number(page), populate: 'user'});
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//Fetch single income
const fetchExpDetailsCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const expense = await Expense.findById(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

//Update
const updateExpCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    const { title, amount, description } = req.body;

    try {
        const expense = await Expense.findByIdAndUpdate(
            id, 
            {
                title, 
                description, 
                amount
            },
        { new: true });
        res.json(expense);
    } catch (error) {
        res.json(error)
        
    }  
});

//Delete
const deleteExpCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const expense = await Expense.findByIdAndDelete(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
});

module.exports = {
    createExpCtrl,
    fetchAllExpCtrl,
    fetchExpDetailsCtrl,
    updateExpCtrl,
    deleteExpCtrl 
 };