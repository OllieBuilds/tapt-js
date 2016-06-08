'use strict';

const app = require('./app-data');
const ui = require('./auth/ui');
// const search = require('./search');

// const loadBeers = (category, query) => {
//   $.ajax({
//     method: 'GET',
//     url: app.api + 'beers'
//   })
//   .done(function (data) {
//     console.log(data);
//     // let beersTemplate = require('./templates/beers.handlebars');
//     app.beers = data.beers;
//     // return data;
//     search.searchBeers(category, query, data);
//     // $('#beers').append(beersTemplate({beers:data.beers}));
//   }).fail(ui.failure);
// };

const load = (category, query) => {
  console.log(category);
  console.log(query);
  $.ajax({
    method: 'GET',
    url: app.api + 'beers',
  }).done(function(data) {
    console.log(category);
    console.log(query);
    console.log(data);
  })
  .fail(ui.failure);
};

module.exports = {
  load,
};
