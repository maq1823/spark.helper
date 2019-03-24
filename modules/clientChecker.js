'use strict';

// Load modules

const Boom = require('boom');

// Declare internals

const internals = {};

exports.plugin = {

    name: 'clientChecker',
    version: '1.0.0',
    description: 'Adds clientId check as Onrequest extension',
    register: function (server, options) {

        server.ext('onRequest', function (request, h) {

            if (request.method === 'options') {
                return h.continue;
            }
            const clientId = request.headers['client-id'];
            if (clientId && clientId === "android") {
                return h.continue;
            }
            throw Boom.unauthorized('invalid clientId');
        });

    }

};
