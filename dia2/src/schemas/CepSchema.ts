import Joi from 'joi';

const CEP_REGEX = new RegExp(/\d{5}-\d{3}/);

const CepSchema = Joi.object({
  cep: Joi.string().pattern(CEP_REGEX).max(9).required(),
  logradouro: Joi.string().max(50).required(),
  bairro: Joi.string().max(20).required(),
  localidade: Joi.string().max(20).required(),
  uf: Joi.string().max(2).required(),
}).messages({
  'any.required': 'O campo {#label} é obrigatório',
  'string.empty': 'O campo {#label} não pode estar vazio',
  'string.pattern.base': 'CEP inválido',
  'string.max': 'O campo {#label} possui uma quantidade máxima de {#limit} caracteres',
  'string.base': 'O campo {#label} deve ser do tipo: "string"',
});

export default CepSchema;
