const mongoose = require('mongoose')

//Schema
const expenseSchema = mongoose.Schema({
    title:{
        required: [true, 'Title is required'],
        type: String,
    },
    description:{
        required: [true, 'Description required'],
        type: String,
    },
    type:{
        type: String,
        default: "expense"
    },
    amount:{
        required: [true, 'Amount is required'],
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,//MUST BE MONGODB ID
        ref: "User",
        required: [true, "User ID is required."],
    },
},
{
    timestamps: true,
 });

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;