"use strict";
var $ = require("jquery");

var fade = {};
module.exports = fade;

fade.fade = function fade (element, isIn, callback, inValue, outValue) {
  if (inValue === undefined) var inValue = 1;
  if (outValue === undefined) var outValue = 0;
  var fadeTime = 1000;
  var $element = $(element);
  if (isIn === true) {
    element.style.display = (element.hasAttribute("data-fade-inline-block") ? "inline-block" : "block");
    $element.stop().animate({opacity: inValue}, fadeTime, "swing", callback);
  } else {
    $element.stop().animate({opacity: outValue}, fadeTime, "swing", function () {
      if (outValue === 0) element.style.display = "none";
      return callback();
    });
  }
};

fade.fadeId = function fadeId (elementId, isIn) {
  return fade.fade(document.getElementById(elementId), isIn);
};