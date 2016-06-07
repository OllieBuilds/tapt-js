'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./ajax');
const authUi = require('./ui');


const addHandlers = () => {
  // Authentication ations
  $('#signup').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.success, authUi.failure, data);
  });

  // $('#signup').on('click', function (event) {
  //   event.preventDefault();
  //   console.log('yo dude');
  // });

  $('#signin_form').on('click', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('sign-in' + data);
    authApi.signIn(authUi.sign_in_success, authUi.failure, data);
  });

  $('#signout_form').on('click', function (event) {
    event.preventDefault();
    console.log('sign-out');
    authApi.signOut(authUi.success, authUi.failure);
  });

  $('#newPassword').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('pw change');
    authApi.changePassword(authUi.success, authUi.failure, data);
  });

};


module.exports = {
  addHandlers,
};
