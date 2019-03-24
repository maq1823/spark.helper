'use strict';

// Declare internals

const internals = {};

exports.validate = function (decoded, request, h) {

    if (decoded._key && decoded.scopes) {

        return { isValid: true };
    }

    return { isValid: false };

};
