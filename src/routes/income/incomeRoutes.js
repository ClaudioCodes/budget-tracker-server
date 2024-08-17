const express = require('express');
const { createIncCtrl } = require("../../controllers/income/incomeCtrl");

const incomeRoute = express.Router();

incomeRoute.post('/', createIncCtrl);
module.exports = incomeRoute;