const mongoose = require('mongoose')

//Schema
const incomeSchema = mongoose.Schema({
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
        default: "income"
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
    timestamp: true,
 });

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;