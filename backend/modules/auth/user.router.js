const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./user.model");
const { validateSignup, validateSignin } = require("./user.validate");
const validateRequest = require("../../middleware/validateRequest");


authRouter.post("/signup", validateSignup, validateRequest, async (req, res) => {
    const { email, phone, name, password, role } = req.body;

    const hash = await bcrypt.hash(password, 8);

    const user = await User.create({
        email,
        phone,
        name,
        password: hash,
        service_role: role
    });

    const token = jwt.sign(
        { email, role },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
    );

    res.status(200).json({
        message: "signup success",
        token
    });
});

authRouter.post("/signin", validateSignin, validateRequest, async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    const isAuthenticated = await bcrypt.compare(password, user.password);

    if (!isAuthenticated) {
        // throw error
    }

    const token = jwt.sign(
        { email: email, role: user.service_role },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
    );

    res.status(200).json({
        message: "login success",
        token
    });
});

module.exports = authRouter;