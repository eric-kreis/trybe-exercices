import Joi from 'joi';

export const idValidate = Joi
  .number()
  .required()
  .messages({
    'any.required': 'The field {#label} is required',
    'number.base': 'The field {#label} have to be a number',
  });

const ProductSchema = Joi.object({
  name: Joi.string().max(100).required(),
  brand: Joi.string().max(70).required(),
}).messages({
  'any.required': 'The field {#label} is required',
  'string.max': 'The field {#label} can\'t have more than {#limit} characters',
  'string.empty': 'The field {#label} can\'t be empty',
  'string.base': 'The field {#label} have to be a string',
});

export default ProductSchema;
