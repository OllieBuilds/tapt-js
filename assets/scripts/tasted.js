'use strict';

const app = require('./app-data');

// appends tasted handlebars
const displayTasted = (data) => {
  // extract label urls
  let urls =[];
  console.log(data);
  // debugger;
  for(let i = 0; i < data.length; i++) {
    let url = data[i]['labels/medium'].toString();
    if(url){
    urls.push(url);}else{urls.push('null');}
  }

  let tastedTemplate = require('./templates/tasted.handlebars');
  let tastedLabelsTemplate = require('./templates/tastedLabels.handlebars');
  $('#tasted-beers').append(tastedTemplate({beers:data.beer}));
  $('#tasted-labels').append(tastedLabelsTemplate({labels:urls}));
};

const showTasted = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + 'tasted',
    dataType: 'json',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(function(data) {
    console.log(data.beer + 'shows');
    let beers = data;
    displayTasted(beers);
  })
  .fail(failure);
};

const addTasted = (success, failure, data, label) => {
  $.ajax({
    method: 'POST',
    url: app.api + 'tasted',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'name': data,
    },
  }).done(success)
  .fail(failure);
};

module.exports={
  showTasted,
  addTasted,
};
