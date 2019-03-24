'use strict';

// Load modules

// Declare internals

const internals = {};

exports.getDayRangeForDate = function (date) {

    // This function at the moment creates the start and end accordig to local time. If the 
    // local time on server is not the way we want(eg: iran st time) we have to play with offset/timezone
    // to correct it

    const now = date ? date : Date.now();
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);

    return {
        start: start.valueOf(),
        end: end.valueOf()
    };

};

exports.getDayStart = function (date) {

    // This function at the moment creates the start accordig to local time. If the 
    // local time on server is not the way we want(eg: iran st time) we have to play with offset/timezone
    // to correct it

    const now = date ? date : Date.now();
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);

    return start.valueOf();

};
