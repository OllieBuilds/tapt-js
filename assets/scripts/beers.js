'use strict';

const app = require('./app-data');
const ui = require('./auth/ui');


const searchBeers = (beers) =>{
  let results = [];
  let urls =[];
  // // let renderResults = [];
  //     for(let i = 0; i < beers.length; i++){
  //         if(beers[i].name !== ""){results.push(beers[i]);}
  //     }
  // console.log(beers[134]);
  // debugger;
  for(let i = 0; i < beers.length-100; i++) {
    if(beers[i].name.toString().indexOf($('input:text').val()) >= 0)
      {
      let url = beers[i]['labels/medium'].toString();
      if(url){
      urls.push(url);}else{urls.push('null');}
      results.push(beers[i]);
      }
  }
    // console.log(results);
    let beersTemplate = require('./templates/beers.handlebars');
    let labelsTemplate = require('./templates/labels.handlebars');
    $('#beers').append(beersTemplate({beers:results}));
    $('#labels').append(labelsTemplate({labels:urls}));
      //  $("li:even").css("background-color", "#666");
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

module.exports = {
  load,
};
