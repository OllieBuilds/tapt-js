'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundle

const authEvents = require('./auth/events');
const search = require('./search');
// const tasted = require('./tasted');
// const breweries = require('./breweries');
// const api = require('./auth/ajax');
$(() => {
  authEvents.addHandlers();
  search.search();
});
