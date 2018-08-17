export default function(id, member, phoneNumber, watingTime, visitedCount, standby) {
  return (
    `<div class="list_main">
      <ul class="waiting-lists">
        <li class="waiting-list">
          <i class="fa fa-user-circle-o" style="font-size:30px"></i>
          <div class="card waiting-list_card">
            <div class="waiting-list_boxs">
                <div class="first waiting-list_box">
                    웨이팅 #${id}
                </div>
                <div class="number waiting-list_box btn btn-primary" data-toggle="modal" data-target="#number_modal">
                    <i class="fa fa-users"></i>
                    ${member}명
                </div>
                <div class="waiting-list_box">
                    <i class="fa fa-mobile"></i>
                    ${phoneNumber}
                </div>
                <div class="waiting-list_box">
                    <i class="fa fa-hourglass-half"></i>
                    ${watingTime}분 웨이팅 중
                </div>
            </div>
            <div class="waiting-list_info">
              <p>${visitedCount}번째 방문</p>
              <p>
                <i class="fa fa-users"></i>
                현재 대기인원 ${standby}명
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
    </div>
    
    <div class="number modal fade" id="number_modal" tabindex="-1" role="dialog" aria-labelledby="number_modal" aria-hidden="true">
      <div class="number modal-dialog modal-dialog-centered" role="document">
        <div class="number modal-content">
          <div class="number modal-header" >
            <h5 class="number modal-title" id="number_modal" style="text-align: center">입장 인원을 바꾸시겠습니까?</h5>
            <button type="button" class="number close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="number modal-body" style="text-align: center">
            <input type="number" style="text-align: center; margin:20px 0px">
          </div>
          <div class="number modal-footer">
            <button type="button" class="number btn btn-secondary" data-dismiss="modal">닫기</button>
            <button type="button" class="number btn btn-primary" id="memberNum" data-dismiss="modal">수정</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="call modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="call modal-dialog" role="document">
        <div class="call modal-content">
          <div class="call modal-header">
            <h5 class="call modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="call modal-body">
            대기 상태로 변경하시겠습니까?
          </div>
          <div class="call modal-footer">
            <button type="button" class="call btn btn-secondary" data-dismiss="modal">취소</button>
            <button type="button" class="call btn btn-primary">네, 변경할게요</button>
          </div>
        </div>
      </div>
    </div>`);
  };

