import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery'
import axios from 'axios';


import loginTem from './login.js';
import mainTem from './main.js';
import mainConTem from './main-contents.js';

const app = {
  url: 'http://localhost:3000'
};

console.log('app.js loaded');

$(document).ready(() => {
  console.log('jquery works!');

  $('#contents').html(loginTem());

  $(document).on('click', '#login', app.loginHandler);

  $(document).on('click', '#watingMenu', app.waitingMenuHandler);
  $(document).on('click', '#memberNum', app.waitingPeopleHandler);
});

// ************************* login page **************************************
//login handler
app.loginHandler = () => {
  const adminCode = $('#codeInput').val();
  console.log(adminCode)
  axios.post(`${app.url}/login`, { adminCode })
    .then( response => {
      console.log(response);
      $('#contents').html(mainTem());
    })
    .catch( response => { console.log(response) } );
};

// ************************* main page **************************************
//wating lists handler
app.waitingMenuHandler = () => {
  axios.get(`${app.url}/watingList`)
    .then( response => {
      console.log(response.data);
      //let dumy = response.data.map((team) => mainConTem(team.id, team.member, team.phoneNumber, team.watingTime, team.visitedCount, team.standby));
      response.data.forEach((team) => {
        let dumy = mainConTem(team.id, team.member, team.phoneNumber, team.watingTime, team.visitedCount, team.standby);
        $('#main-contents').append(dumy);
      })
    })
    .catch( response => { console.log(response) } );
};

//wating list handler
app.waitingPeopleHandler = () => {
  var text = $(".number.modal-body input").val()
  $(".number.waiting-list_box.btn.btn-primary").html(`<i class="fa fa-users"></i> ${text}명`)
  console.log(text)
};

//logout handler
app.logoutHandler = () => {
  $('#contents').html(loginTem());
};

