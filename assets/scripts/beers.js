'use strict';

const app = require('./app-data');
const ui = require('./auth/ui');

const loadBeers = () => {
  $.ajax({
    method: 'GET',
    url: app.api + 'beers'
  })
  .done(function (data) {
    console.log(data);
    let beersTemplate = require('./templates/beers.handlebars');
    app.beers = data.beers;
    $('#beers').append(beersTemplate({beers:data.beers}));
  }).fail(ui.failure);
};

// const signUp = (success, failure, data) => {
//   $.ajax({
//     method: 'POST',
//     url: app.api + 'sign-up',
//     dataProcessing: false,
//     data,
//   }).done(success)
//   .fail(failure);
// };


module.exports = {
  loadBeers,
};
