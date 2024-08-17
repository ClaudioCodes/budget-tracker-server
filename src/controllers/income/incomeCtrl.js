const expressAsyncHandler = require('express-async-handler');
const Income = require("../../model/Income");

//Create
const createIncCtrl = expressAsyncHandler(async (req, res) => {
    const { title, amount, description, user } = req.body;
    try {
        const income = await Income.create({
            title,
            amount,
            description,
            user,
        });
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

module.exports = { createIncCtrl };