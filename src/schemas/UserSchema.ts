import Joi from 'joi';

const UserSchema = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(5).required(),
}).messages({
  'any.required': '{#label} is required',
  'string.empty': '{#label} must not be empty',
  'string.base': '{#label} must have the "string" type',
  'string.min': '{#label} must be at least {#limit} characters long',
});

export default UserSchema;
