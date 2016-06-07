'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-up',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'sign-in',
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log(app);
  $.ajax({
    method: 'DELETE',
    url: app.api + 'sign-out/' + app.user1.id,
    headers: {
      Authorization: 'Token token=' + app.user1.token,
    },
  }).done(success)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  console.log(app.user1.authToken);
  $.ajax({
    method: 'PATCH',
    url : app.api + 'change-password/' + app.user1.id,
    headers: {
      Authorization: 'Token token=' + app.user1.authToken,
    },
    data
  }).done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
