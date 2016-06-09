'use strict';

const app = require('./app-data');
const authUi = require('./auth/ui');


const removeTasted = (success, failure, data) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + 'tasted',
    headers:{
        Authorization: 'Token token=' + app.user.token,
    },
    data:{
      'id': data,
    },
  }).done(success)
  .fail(failure);
};

const addBeers = (beer) => {
  let beers = beer;
  let tastedTemplate = require('./templates/tasted.handlebars');
  $('#tasted-beers').append(tastedTemplate({beers:beers}));
  // $('#tasted').modal('show');
  // $('#tasted-beers').append(tastedTemplate({beers:beers}));
};

const sort = (arr) => {
  let beer = [];
  let tmp;
  for(let i =0; i < app.user.beer.length; i++) {
    tmp = arr.beers[i].name;
    if(app.user.beer.indexOf(tmp) < 0)
    {
      console.log('uno');
      beer.push(arr.beers[i]);
    }
  }
  let tastedTemplate = require('./templates/tasted.handlebars');
  $('#tasted-beers').append(tastedTemplate({beer:beer}));

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
