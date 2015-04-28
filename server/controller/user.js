'use strict';

var Joi = require('joi'),
  Boom = require('boom'),
  User = require('../model/user').User;


/**
 * POST /login
 */
exports.login = {
  validate: {
        payload: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    },
  handler: function (request, reply) {

    // In the version with Travelogue and Mongoose this was all handled by Passport (hence we retrieved
    // Passport and inserted the request and reply variables).
    User.authenticate()(request.payload.email, request.payload.password, function (err, user, message) {

      if (err) {
        console.error(err);
        return reply(err);
      }

      // If the authentication failed user will be false. If it's not false, we store the user
      if (user) {
        request.auth.session.set(user);
        return reply('successfully logged in');
      }
      return reply(message);

    });
    }
};

/**
 * GET /logout and logs out the user
 */
exports.logout = {
  auth: 'session',
  handler: function (request, reply) {
    request.auth.session.clear();
    return reply('successfully logged out');
  }
};

/**
 * POST /register and creates a new user.
 */
exports.register = {
  validate: {
    payload: {
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            userName: Joi.string()
        }
  },
  handler: function(request, reply) {

    var newUser = new User({
      email: request.payload.email,
      userName: request.payload.userName,
    });

    // The register function has been added by passport-local-mongoose and takes as first parameter
    // the user object, as second the password it has to hash and finally a callback with user info.
    User.register(newUser, request.payload.password, function(err, user) {
      if (err) {
                return reply(err);
            }

            return reply('successfully registered');
        });
  }
};