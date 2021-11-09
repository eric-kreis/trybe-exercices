import Joi from 'joi';

const userSchema = Joi.object(
  {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  },
).messages(
  {
    'any.required': 'O campo { #label } é obrigatório',
    'string.min': 'O campo { #label } deve ter pelo menos 6 caracteres',
    'string.email': 'Informe um email válido no campo { #label }',
    'string.base': 'O campo { #label } deve ser do tipo: "string"',
    'string.empty': 'O campo { #label } não pode estar vazio',
  },
);

export { userSchema };
