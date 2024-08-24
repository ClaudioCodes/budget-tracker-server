const express = require('express');
const { 
    createExpCtrl,
    fetchAllExpCtrl,
    fetchExpDetailsCtrl,
    updateExpCtrl,
    deleteExpCtrl, 
} = require("../../controllers/expenses/expenseCtrl");
const authMiddleWare = require('../../middlewares/authMiddleware');

const expenseRoute = express.Router();

expenseRoute.post('/', authMiddleWare, createExpCtrl);
expenseRoute.get('/', authMiddleWare,fetchAllExpCtrl);
expenseRoute.get('/:id', authMiddleWare, fetchExpDetailsCtrl);
expenseRoute.put('/:id', authMiddleWare, updateExpCtrl);
expenseRoute.delete('/:id', authMiddleWare, deleteExpCtrl);

module.exports = expenseRoute;