'use strict';

var ReactFetchHook = require("react-fetch-hook");

var match = ReactFetchHook.useFetch("https://google.com");

var isLoading = match[0];

var data = match[1];

exports.isLoading = isLoading;
exports.data = data;
/* match Not a pure module */
