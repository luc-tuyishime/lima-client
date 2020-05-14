import Joi from 'joi-browser';

export default Joi.object().keys({
    email: Joi.string()
        .email({ minDomainAtoms: 2 }),
    firstName: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('firstName'),
    gender: Joi.string()
        .required()
        .label('Gender'),
    lastName: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('lastName'),
    locationAddressId: Joi.string()
        .label('locationAddressId'),
    mobile: Joi.string()
        .required()
        .label('Phone'),
    organizationId: Joi.string()
        .label('Organization'),
    password: Joi.string()
        .min(8)
        .max(100)
        .required(),
    roleName: Joi.string()
        .min(3)
        .max(45)
        .required()
        .label('roleName'),
});
