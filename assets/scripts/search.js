'use strict';
// const getFormFields = require('../../lib/get-form-fields');
const app = require('./app-data');

const search = () => {
  $('#search').on('submit', function(event) {
    event.preventDefault();
    let inputVal = $('input:text').val();
    console.log(inputVal);
    let param;
    $("option:selected").each(function() {
      let tmp = $( this ).text() + " ";
      param = tmp.toLowerCase();
      });
    console.log(param.toLowerCase());
 });

};
module.exports= {
  search,
};
