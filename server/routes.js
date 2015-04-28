// Load modules

var User      = require('./controller/user'),
  	Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

  { method: 'GET',  path: '/{somethingss*}', config: Static.get },
  { method: 'POST', path: '/login', config: User.login},
  { method: 'GET', path: '/logout', config: User.logout},
  { method: 'POST', path: '/register', config: User.register}
];