const express = require('express');
const { 
    createIncCtrl, 
    fetchAllIncCtrl,
    fetchIncDetailsCtrl,
    updateIncCtrl,
    deleteIncCtrl,
} = require("../../controllers/income/incomeCtrl");
const authMiddleWare = require('../../middlewares/authMiddleware');

const incomeRoute = express.Router();

incomeRoute.post('/', authMiddleWare, createIncCtrl);
incomeRoute.get('/', authMiddleWare, fetchAllIncCtrl);
incomeRoute.get('/:id', authMiddleWare, fetchIncDetailsCtrl);
incomeRoute.put('/:id', authMiddleWare, updateIncCtrl);
incomeRoute.delete('/:id', authMiddleWare, deleteIncCtrl);

module.exports = incomeRoute;