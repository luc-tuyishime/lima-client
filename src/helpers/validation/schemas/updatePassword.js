import Joi from 'joi-browser';

export default Joi.object().keys({
    activationCode: Joi.string()
        .min(6)
        .max(45)
        .required()
        .label('activation code'),
    email: Joi.string()
        .email({ minDomainAtoms: 2 }),
    password: Joi.string()
        .min(8)
        .max(100)
        .required()
});
