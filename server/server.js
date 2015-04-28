var Hapi = require('hapi'),
  Routes = require('./routes'),
  Db = require('./config/db'),
  Config = require('./config/config');

var app = {};
app.config = Config;

//For older version of hapi.js
//var server = Hapi.createServer(app.config.server.host, app.config.server.port, {cors: true});

var server = new Hapi.Server();

server.connection({ port: app.config.server.port });

// Register the plugin
server.register(require('hapi-auth-cookie'), function (err) {
    if (err) {
        throw err;
    }

    // Set our strategy
    server.auth.strategy('session', 'cookie', {
        password: Config.cookies.password,
        cookie: Config.cookies.cookie,
        isSecure: Config.cookies.isSecure,
        ttl: Config.cookies.ttl
    });
});

server.route(Routes.endpoints);

server.start(function () {
  console.log('Server started ', server.info.uri);
});