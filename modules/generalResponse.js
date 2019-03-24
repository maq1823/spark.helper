'use strict';

// Load modules

const Joi = require('joi');

// Declare internals

const internals = {};

exports.errorResponse = function (errorMessage, errorCode) {

    return {
        succeed: false,
        errorCode,
        errorMessage,
        result: null
    };

};

exports.successResponse = function (result) {

    return {
        succeed: true,
        errorCode: 0,
        errorMessage: ' ',
        result: result ? result : null
    };

};

exports.schema = function (resultSchema) {
    
    return {
        succeed: Joi.boolean().required(),
        errorCode: Joi.number().required(),
        errorMessage: Joi.string().required(),
        result: resultSchema ? resultSchema : Joi.any().required()
    };

}
