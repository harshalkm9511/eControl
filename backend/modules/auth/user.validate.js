const { body } = require("express-validator");

const validateSignup = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("Invalid email"),

    body("phone")
        .trim()
        .notEmpty()
        .withMessage("Mobile number is required")
        .isNumeric()
        .withMessage("Mobile number should be numeric only")
        .isLength({ min: 10, max: 10 })
        .withMessage("Mobile number must be 10 digits"),

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Pawwword is required")
        .isLength({ min: 8, max: 20 })
        .withMessage("Password length must be the length of 8 to 20 characters"),

    body("service_role")
        .trim()
        .notEmpty()
        .withMessage("Role is required")
        .isIn([
            "police",
            "temple",
            "medical",
            "water",
            "food",
            "sanitation",
            "accomudation",
            "volunteer"
        ])
        .withMessage("Invalid category")

];

const validateSignin = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("email is required")
        .isEmail()
        .withMessage("Invalid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Pawwword is required")
        .isLength({ min: 8, max: 20 })
        .withMessage("Password length must be the length of 8 to 20 characters"),
]

module.exports = {validateSignup, validateSignin};