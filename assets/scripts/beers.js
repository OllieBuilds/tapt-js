'use strict';

const app = require('./app-data');
const ui = require('./auth/ui');


const searchBeers = (beers) =>{
  // console.log(beers[0].name);
  let results = [];
  // let param;
  // $("option:selected").each(function() {
  //   let tmp = $( this ).text() + " ";
  //   param = tmp.toLowerCase();
  //     });
      for(let i = 0; i < beers.length; i++){
        // console.log(beers[i].name);
        if (beers[i].name) {
        //   console.log(beers[i].param);
          results.push(beers[i].name);
        }
      }

  // console.log(results);
  for(let i = 0; i < results.length; i++) {
    if(results[i].indexOf($('input:text').val()) >= 0) {
      console.log(results[i]);
    }
  }
};

const load = () => {
  // console.log(category);
  // console.log(query);
  $.ajax({
    method: 'GET',
    url: app.api + 'beers',
  }).done(function(data) {
    let beers = data.beers;
    // console.log(beers);
    // console.log(data.length + ' on load');
    searchBeers(beers);
    // console.log(category);
    // console.log(query);
    // console.log(data);
  })
  .fail(ui.failure);
};

module.exports = {
  load,
};
