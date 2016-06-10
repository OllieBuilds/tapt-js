'use strict';

const app = require('./app-data');
const authUi = require('./auth/ui');
// const getFormFields = require('../../lib/get-form-fields');

const removeTasted = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'DELETE',
    url: app.api + 'tasted/'+ data,
    headers:{
        Authorization: 'Token token=' + app.user.token,
    },
    data: {
      name: data,
    },
  }).done(success)
  .fail(failure);
};

const addRating = (success, failure, id, rate, data) => {
  console.log(rate);
  $.ajax({
    method: 'PATCH',
    url: app.api + "tasted/" + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data:{
      'rating': rate,
      'name': data,
    },
  }).done(success)
  .fail(failure);
};

const sort = (arr) => {
  let beer = [];
  let tmp;
  for(let i =0; i < app.user.beer.length; i++) {
    tmp = arr.beers[i].name;
    if(app.user.beer.indexOf(tmp) < 0)
    {
      beer.push(arr.beers[i]);
    }
  }
  let tastedTemplate = require('./templates/tasted.handlebars');
  $('#tasted-beers').append(tastedTemplate({beer:beer}));
  $('.rmBeer').on('click', function(event) {
    event.preventDefault();
    console.log('clicked');
    let data = $('.rmBeer').attr('value').toString();
    console.log(data);
    removeTasted(authUi.success, authUi.failure, data);

  });
  $('.rate').on('submit', function(event) {
    event.preventDefault();
    let rating = $('.tmp').val();
    let name = $('.rate').attr('id').toString();
    let iden = $('.tmp').attr('id').toString();
    addRating(authUi.success, authUi.failure, iden, rating, name);
  });
};

const handleBeers = () => {
  $.ajax({
    method: 'GET',
    url: app.api + 'beers'
  }).done((data)=>sort(data))
  .fail(authUi.failure);
};

const showTasted = () => {
  let display =[];
  for(let i =0; i < app.user.beer.length; i++){
    if(display.indexOf(app.user.beer[i]) >= 0) {
      console.log('already tasted');
    }else{
      display.push(app.user.beer[i]);
    }
  }
  handleBeers(display);
};

const addTasted = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'tasted',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data:{
      'name': data,
    },
  }).done(function(data){console.log(data + "tasted .done");})
  .fail(failure);
};

module.exports={
  showTasted,
  addTasted,
  removeTasted
};
