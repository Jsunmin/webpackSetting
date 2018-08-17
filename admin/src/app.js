import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery'
import loginTem from './login.js';
import mainTem from './main.js';
import mainConTem from './main-contents.js';

const app = {};

console.log('app.js loaded');

$(document).ready(() => {
  console.log('jquery works!')

  $('#contents').html(loginTem());

  $(document).on('click', '#login', app.loginHandler);
  $(document).on('click', '#watingMenu', app.waitingHandler);

});

app.loginHandler = () => {
  $('#contents').html(mainTem());
}

app.waitingHandler = () => {
  $('#main-contents').html(mainConTem());
}