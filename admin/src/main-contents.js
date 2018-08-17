export default function() {
  return (
    `<div class="list_main">
      <ul class="waiting-lists">
        <li class="waiting-list">
          <i class="fa fa-user-circle-o" style="font-size:30px"></i>
          <div class="card waiting-list_card">
            <div class="waiting-list_boxs">
                <div class="first waiting-list_box">
                    웨이팅 #31
                </div>
                <div class="waiting-list_box">
                    <i class="fa fa-users"></i>
                    1명
                </div>
                <div class="waiting-list_box">
                    <i class="fa fa-mobile"></i>
                    010-****-****
                </div>
                <div class="waiting-list_box">
                    <i class="fa fa-hourglass-half"></i>
                    2분 웨이팅 중
                </div>
            </div>
            <div class="waiting-list_info">
              <p>1번째 방문</p>
              <p>
                <i class="fa fa-users"></i>
                현재 대기인원 1명
                <button type="button" class="btn btn-outline-primary">호출</button>
              </p>
            </div>
            <div class="waiting-list_button-container">
                <button type="button" class="btn btn-outline-success">입장</button>
                <button type="button" class="btn btn-outline-danger">없음</button>
                <button type="button" class="btn btn-outline-warning">대기</button>
            </div>
          </div>
        </li>
      </ul>
    </div>`);
  };    