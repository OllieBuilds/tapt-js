'use strict';
const app = require('./app-data');
const beer = require('./beers');

const search = () => {
  $('#search').on('submit', function(event) {
    event.preventDefault();
    let inputVal = $('input:text').val();
    let param;
    $("option:selected").each(function() {
      let tmp = $( this ).text() + " ";
      param = tmp.toLowerCase();
      app.param = param;
      app.query = inputVal;
    });
    beer.load();
  });


};
module.exports= {
  search,
};
