'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./ajax');
const authUi = require('./ui');
const tasted = require('../tasted');

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
    $('.auth').addClass('hide').removeClass('show');
    $('.unauth').removeClass('hide').addClass('show');
  });

  $('#changepw').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('pw change');
    authApi.changePassword(authUi.success, authUi.failure, data);
  });

  $('#see-tasted').on('click', function (event) {
    event.preventDefault();
    tasted.showTasted(authUi.tastedSuccess, authUi.failure);
  });
};

module.exports = {
  addHandlers,
};
