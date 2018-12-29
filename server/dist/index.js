"use strict";

var _async = require("async");

var begin = function begin() {
  return (0, _async.forever)(function (next) {
    next(new Error('oops'));
  }, function (err) {
    console.error(err);
    setTimeout(begin, 500);
  });
};

begin();