"use strict";
var Velocity = require("velocity-animate");

var fade = {};
module.exports = fade;

fade.fade = function fade (element, isIn, callback, inValue, outValue) {

  var internalFalseyCallback = function () {
    return callback(false);
  };

  var internalFade = function (element, value, callback) {
    Velocity(element, "stop");
    Velocity(element,
      {
        "opacity": value
      },
      {
        "duration": 1000,
        "complete": function () {
          return internalFalseyCallback();
        }
      }
    );
  };

  if (inValue === undefined) inValue = 1;
  if (outValue === undefined) outValue = 0;
  if (!callback) callback = (function () {  });
  if (element[0]) element = element[0];
  if (isIn === true) {
    element.style.display = (element.dataset.fadeInlineBlock === "" ? "inline-block" : "block");
    return internalFade(element, inValue, callback);
  } else {
    return internalFade(element, outValue, function () {
      if (outValue === 0) element.style.display = "none";
      return internalFalseyCallback();
    });
  }
};

fade.fadeId = function fadeId (elementId, isIn) {
  return fade.fade(document.getElementById(elementId), isIn);
};