'use strict';

const app = require('./app-data');
const ui = require('./auth/ui');
const getFormFields = require('../../lib/get-form-fields');
// const tasted = require('./tasted');

const createBeer = (success, failure) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'beers',
    data: {
      'beer':{
      'name': 'Abeer',
      'abv': 6
      }
    }
  }).done(success)
  .fail(failure);
};

const deleteBeer = (success, failure, data) => {
  console.log(data);
  // let shit = `{'id':data}`;
  // console.log(shit);
  $.ajax({
    method: 'DELETE',
    url: app.api + 'beers/' + data,
    processData: false,
    dataType: 'json',
    data,
  }).done(success)
  .fail(failure);
};

const searchBeers = (beers) =>{
  let results = [];
  let urls =[];

  for(let i = 0; i < beers.length; i++) {
    if(!beers[i]['labels/medium']){
      console.log(beers[i].name);
      }else if(beers[i].name.toString().indexOf($('input:text').val()) >= 0)
      {
      let url = beers[i]['labels/medium'].toString();
      if(url){
      urls.push(url);}else{urls.push('null');}
      results.push(beers[i]);
    }
  }
    if(results.length === 0) {
       $('#no-results').modal('show');
        console.log('no results');}
    let beersTemplate = require('./templates/beers.handlebars');
    let labelsTemplate = require('./templates/labels.handlebars');
    $('#beers').append(beersTemplate({beers:results}));
    $('#labels').append(labelsTemplate({labels:urls}));
    $('.remove').on('click', function(event) {
      event.preventDefault();
      let data = $('.remove').attr('value');
      console.log(data);
      deleteBeer(ui.success, ui.failure, data);
    });
    $('.rename').on('submit', function(event) {
      event.preventDefault();
      let data = getFormFields(this);
      // console.log(data.type);
      rename(ui.success, ui.failure, data);
    });
};

const load = () => {
  $.ajax({
    method: 'GET',
    url: app.api + 'beers',
  }).done(function(data) {
    let beers = data.beers;
    searchBeers(beers);
  })
  .fail(ui.failure);
};

const rename = (success, failure) => {
  // console.log(data.target);
  $.ajax({
    method: 'PATCH',
    url: app.api + 'beers/VwR7Xg',
    data: {
      beer: {
        name: 'newname',
      }
    }
  }).done(success)
  .fail(failure);
};

module.exports = {
  load,
  createBeer,
  rename,
};
