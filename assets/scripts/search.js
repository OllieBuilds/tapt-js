'use strict';

const beer = require('./beers');

const search = () => {
  $('#search').on('submit', function(event) {
    event.preventDefault();
    $('#beers').html('');
    beer.load();
  });


};
module.exports= {
  search,
};
