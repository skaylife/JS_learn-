window.addEventListener('DOMContentLoaded', function () {
  const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    timer = require('./modules/timer'),
    slider = require('./modules/slider'),
    form = require('./modules/form'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc');

  tabs();
  modal();
  timer();
  slider();
  form();
  cards();
  calc();
});
