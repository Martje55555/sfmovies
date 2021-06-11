'use strict';

exports.register = (server, options, next) => {

  server.route([{
    method: 'POST',
    path: '/movies',
    config: {
      handler: (request, reply) => {
        console.log('handler');
       // console.log(request);
        reply('hello world').code(200);
        console.log(reply);
      }
    }
  }]);

  next();

};

exports.register.attributes = {
  name: 'movies'
};
