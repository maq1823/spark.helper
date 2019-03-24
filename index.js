'use strict';

// Load modules

const AuthRegister = require('./modules/authRegister');
const GeneralResponse = require('./modules/generalResponse');
const ClientChecker = require('./modules/clientChecker');

// Declare internals

const internals = {};

exports.authRegister = AuthRegister;
exports.gResp = GeneralResponse;
exports.clientChecker = ClientChecker;
