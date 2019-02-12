//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri:'mongodb://Admin:password1@ds117545.mlab.com:17545/b0tt13', //place the URI of your mongo database here.
  }, 
  port: 8080
};