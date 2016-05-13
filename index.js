"use strict";
var Velocity = require("velocity-animate");

var fade = {};
module.exports = fade;

fade.fade = function fade (element, isIn, callback, inValue, outValue) {

  var internalFade = function (element, value, fadeTime, callback) {
    Velocity(element,
      {
        "opacity": value
      },
      {
        "duration": fadeTime,
        "complete": callback
      }
    );
    return false;
  };

  if (inValue === undefined) inValue = 1;
  if (outValue === undefined) outValue = 0;
  if (!callback) callback = (function () {  });
  var fadeTime = 1000;
  if (element[0]) element = element[0];
  if (isIn === true) {
    element.style.display = (element.dataset.fadeInlineBlock ? "inline-block" : "block");
    return internalFade(element, inValue, fadeTime, callback);
  } else {
    return internalFade(element, outValue, fadeTime, function () {
      if (outValue === 0) element.style.display = "none";
      return callback();
    });
  }
};

fade.fadeId = function fadeId (elementId, isIn) {
  return fade.fade(document.getElementById(elementId), isIn);
};