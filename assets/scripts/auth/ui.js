'use strict';
const app = require('../app-data');

const success = (data) => {
  console.log('success' + data);
};

const signInSuccess = (data) => {
  console.log(data);
  app.user = data.user;
  app.user.authToken = data.user.token;
  // app.user1 = data.user;
  // app.user1.authToken = data.user.token;
  console.log(app.user);
  console.log(data);
  console.log('signed in');
  $('.auth').addClass('show').removeClass('hide');
  $('.unauth').removeClass('show').addClass('hide');
};

module.exports = {
  success,
  signInSuccess,
};
