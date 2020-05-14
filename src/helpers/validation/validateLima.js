import Joi from 'joi-browser';
import newUser from './schemas/newUser';
import activateAccount from './schemas/activateAccount';
import loginUser from './schemas/loginUser';

export default (inputs, schema) => {
    const errors = {};
    const validateSchemas = {
        newUser,
        activateAccount,
        loginUser
    };
    const { error } = Joi.validate(inputs, validateSchemas[schema], { abortEarly: false });

    if (error && typeof error === 'object' && Object.keys(error).length) {
        error.details.forEach((err) => {
            errors[err.path[0]] = err.message.replace(/"/g, '');
        });
    }

    return errors;
};
