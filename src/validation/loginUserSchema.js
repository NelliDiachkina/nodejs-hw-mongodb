import Joi from 'joi';

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(2).max(12),
});
