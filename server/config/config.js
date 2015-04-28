'use strict';

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  database: {
  	url: 'mongodb://127.0.0.1/CronjPassport'
  },
  cookies: {
    password: 'worldofwalmart', // cookie secret
        cookie: 'session', // Cookie name
        isSecure: false, // required for non-https applications
        ttl: 24* 60 * 60 * 1000 // Set session to 1 day
  }
};
