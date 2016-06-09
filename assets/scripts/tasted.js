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

// appends tasted handlebars
// const displayTasted = (data) => {
//   // extract label urls
//   let urls =[];
//   console.log(data);
//   // debugger;
//   for(let i = 0; i < data.length; i++) {
//     let url = data[i]['labels/medium'].toString();
//     if(url){
//     urls.push(url);}else{urls.push('null');}
//   }
//
//   let tastedTemplate = require('./templates/tasted.handlebars');
//   let tastedLabelsTemplate = require('./templates/tastedLabels.handlebars');
//   $('#tasted-beers').append(tastedTemplate({beers:data.beer}));
//   $('#tasted-labels').append(tastedLabelsTemplate({labels:urls}));
//   $('.rmBeer').on('click', function(event) {
//     event.preventDefault();
//     let data = $(this).attr('value').toString();
//     removeTasted(authUi.success, authUi.failure, data);
//   });
// };

const displayTasted = (id) =>{
  $.ajax({
    method: 'GET',
    url: app.api + 'beers',
    dataType: 'json',
    data: {
      'id': id
    },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(authUi.success)
  .fail(authUi.failure);
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
    // displayTasted(beers);
  })
  .fail(failure);
};

const addTasted = (success, failure, data) => {
  console.log(data);
  debugger;
  $.ajax({
    method: 'POST',
    url: app.api + 'tasted',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data:{
      'id': data,
    },
  }).done(function(data){console.log(data);})
  .fail(failure);
};

module.exports={
  showTasted,
  addTasted,
  removeTasted
};
