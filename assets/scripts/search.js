'use strict';
// const getFormFields = require('../../lib/get-form-fields');
// const app = require('./app-data');
const beer = require('./beers');

const searchBeers = (category, query, myArray) =>{
  let results = [];
  for(let i =0; i < myArray.length; i++){
    if (myArray[i].category === query){
      results.push(myArray[i]);
    }
  }console.log(results);
};

// const search = () => {
//   $('#search').on('submit', function(event) {
//     event.preventDefault();
//     // beerData.loadBeers();
//     // let beers = app.beers;
//     let inputVal = $('input:text').val();
//     // console.log(inputVal);
//     let param;
//     $("option:selected").each(function() {
//       let tmp = $( this ).text() + " ";
//       param = tmp.toLowerCase();
//     });
//     beer.loadBeers(param, inputVal);
//     // let beers = app.beers;
//     // .done(searchBeers(param, inputVal, app.beers));
//     // console.log(param.toLowerCase());
//     // searchBeers(param, inputVal, beers);
//   });

const search = () => {
  $('#search').on('submit', function(event) {
    event.preventDefault();
    let inputVal = $('input:text').val();
    let param;
    $("option:selected").each(function() {
      let tmp = $( this ).text() + " ";
      param = tmp.toLowerCase();});
    beer.load(param, inputVal);
  });


};
module.exports= {
  search,
  searchBeers,
};
