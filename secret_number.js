'use strict';
module.exports = function() {
  var randomNum = Math.random(0,1000000);
    return function(){
      return randomNum;
  };
};