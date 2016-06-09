'use strict';
const app = require('../app-data');

const success = (data) => {
  console.log('success' + data);
};

const failure = (error) => {
  console.log(error);
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
  $('#login').modal('hide');
  $('.auth').addClass('show').removeClass('hide');
  $('.unauth').removeClass('show').addClass('hide');
  $('#tasted').modal('show');
};

module.exports = {
  success,
  signInSuccess,
  failure,
};
