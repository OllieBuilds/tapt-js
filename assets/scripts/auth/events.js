'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./ajax');
const authUi = require('./ui');
const tasted = require('../tasted');
const beers = require('../beers');

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
    $('#tasted-beers').html('');
    $('#beers').html('');
    $('#labels').html('');
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
    $('#beers').html('');
    $('#labels').html('');
  });
};

$('#createBeer').on('click', function(event) {
  event.preventDefault();
  beers.createBeer(authUi.success, authUi.failure);
});



module.exports = {
  addHandlers,
};
