'use strict';

const beer = require('./beers');

const search = () => {
  $('#search').on('submit', function(event) {
    event.preventDefault();
    $('#beers').html('');
    $('#labels').html('');
    beer.load();
  });


};
module.exports= {
  search,
};
