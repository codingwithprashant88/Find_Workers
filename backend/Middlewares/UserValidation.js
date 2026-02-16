const joi = require("joi");

const SignupValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(4).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(50).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
  next();
};

const LoginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).max(50).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
  next();
};

const RegistrationValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).max(10).required(),
    age: joi.number().min(18).max(100).required(),
    phone: joi.string().pattern(/^[0-9]{10}$/).required(),
    email: joi.string().email().required(),
    category: joi.string().min(4).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
  next();
};

module.exports = { SignupValidation, LoginValidation, RegistrationValidation };
