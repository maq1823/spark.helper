'use strict';

// Load modules

const validate = require('./validate').validate;

// Declare internals

const internals = {};

exports.plugin = {

    name: 'auth',
    version: '1.0.0',
    description: 'registers jwt2 auth plugin',
    register: function (server, options) {

        server.auth.strategy('jwt', 'jwt',
            {
                key: options.secret,
                validate,
                verifyOptions: {
                    algorithms: ['HS256']
                }
            }
        );

        server.auth.default('jwt');

    }

};
