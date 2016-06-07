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
  console.log(app.user);
  $.ajax({
    method: 'DELETE',
    url: app.api + 'sign-out/' + app.user._id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const changePassword = (success, failure, data) => {
  console.log(app.user.authToken);
  $.ajax({
    method: 'PATCH',
    url : app.api + 'change-password/' + app.user._id,
    headers: {
      Authorization: 'Token token=' + app.user.authToken,
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
