"use strict";
var $ = require("jquery");

var fade = {};
module.exports = fade;

fade.fade = function fade (element, isIn, callback, inValue, outValue) {
  if (inValue === undefined) inValue = 1;
  if (outValue === undefined) outValue = 0;
  var fadeTime = 1000;
  if (isIn === true) {
    element.style.display = (element.dataset.fadeInlineBlock ? "inline-block" : "block");
    $(element).stop().animate({ "opacity": inValue }, fadeTime, "swing", callback);
  } else {
    $(element).stop().animate({ "opacity": outValue }, fadeTime, "swing", function () {
      if (outValue === 0) element.style.display = "none";
      return callback();
    });
  }
};

fade.fadeId = function fadeId (elementId, isIn) {
  return fade.fade(document.getElementById(elementId), isIn);
};