'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./ajax');
const authUi = require('./ui');
const search = require('../beers');

const addHandlers = () => {
  // Authentication ations

  $('#signin').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('sign-in' + data);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });

  $('#signup').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.success, authUi.failure, data);
  });

  $('#signout').on('click', function (event) {
    event.preventDefault();
    console.log('sign-out');
    authApi.signOut(authUi.success, authUi.failure);
  });

  $('#changepw').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('pw change');
    authApi.changePassword(authUi.success, authUi.failure, data);
  });

  // $('#search').on('click', function(event) {
  //   event.preventDefault();
  //   search.loadBeers();
  // });

};

module.exports = {
  addHandlers,
  // search,
};
