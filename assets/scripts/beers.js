'use strict';

const app = require('./app-data');
const ui = require('./auth/ui');

const searchBeers = (category, query, data) =>{
  // console.log(category + " " + query + " " + data);
  let results = [];
  let param = category.str();
  // console.log(data.length + 'WTF');
  for(let i = 0; i < data.length; i++){
    // .category.toLowerCase().indexOf(query) >= 0
    let params = this.param;
    if (data[i]){
      console.log(data[i].param);
      results.push(data[i]);
    }
  }console.log(results);
};

const load = (category, query) => {
  console.log(category);
  console.log(query);
  $.ajax({
    method: 'GET',
    url: app.api + 'beers',
  }).done(function(data) {
    let beers = data.beers;
    console.log(beers);
    // console.log(data.length + ' on load');
    searchBeers(category, query, beers);
    // console.log(category);
    // console.log(query);
    // console.log(data);
  })
  .fail(ui.failure);
};

module.exports = {
  load,
};
