export default function() {
  return (
    `<div class='container-fluid'>
      <div class="navi">
        <div class='logo'>Logo</div>
        <div class='photo'>Pic</div>
      </div>
  
      <div class="tab">
        <button class="tablinks" id='watingMenu'>웨이팅 관리</button>
        <button class="tablinks">예약 관리</button>
        <button class="tablinks">통 계</button>
        <button class="tablinks">설 정</button>
      </div>
    </div>
    <div id='main-contents'></div>`);
};
