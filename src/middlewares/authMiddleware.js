const expressAsyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const User = require('../model/User');


const authMiddleWare = expressAsyncHandler(async(req, res, next) => {
    let token;

    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req?.headers?.authorization?.split(" ")[1];
        try {
            if(token) {
                const decodedUser = jwt.verify(token, process.env.JWT_KEY);
                //Find the user
                const user = await User.findById(decodedUser?.id);
                //Attach the user to the req object
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized, token expired.");

        }
    } else{
        throw new Error("There is no token attached to the header.");

    }
});

module.exports = authMiddleWare;

