'use strict';

const Hapi = require('hapi');
const config = require('../config');

const server = new Hapi.Server({
    connections: {
        router: { stripTrailingSlash: true } // removes trailing slashes on incoming paths
    }
});

server.connection({ port: config.PORT });

module.exports = server;