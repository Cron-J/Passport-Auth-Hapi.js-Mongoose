Hapi-Mongoose-Passport Example
========================

The purpose of this app is to show a new way to work with Hapi.js, Mongodb, Mongoose, Angular.js.


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

### *API Available*

###### *Register User*

	POST: http://localhost:8080/register

	{
	"email":"someEmail",
	"password":"somepassword",
	"userName":"Cronj"
	}

###### *Login*

	POST: http://localhost:8080/login

	{
	"email":"someEmail",
	"password":"somepassword"
	}

###### *Logout*

	GET:  http://localhost:8080/logout
      

### Other Usefull Link


[Can also look into Hapi File Upload And Download for all type] (https://github.com/Cron-J/Hapi-file-upload-download)

[Express-Mongoose-Angular] (https://github.com/Cron-J/Express-file-upload-download)

[JWT-Hapi-Mongoose-Mongodb-with-email-verification-and-forgot-password] (https://github.com/Cron-J/JWT-Hapi-Mongoose-Mongodb-with-email-verification-and-forgot-password)


