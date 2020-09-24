const { check, validationResult } = require('express-validator');

const toDoValidations = () => {
  return [check('review', 'Title is required').not().isEmpty()];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

module.exports = {
  toDoValidations,
  validate,
};
