export default function() {
    return (
      `<div class='container signin-container'>
        <div class='row'>
          <div class='col'></div>
          <div class='col-8'>
              <div class='card signin-card'>
                  <div class='row card-block'>
                      <div class='col-lg-4 login-logo'></div>
                      <div class='col-lg-1'></div>
                      <form class='col-lg-6 row'>
                        <div class="col-10 form-group signin-box">
                          <input class="form-control" id="codeInput" placeholder="Admin Code"></input>
                          <small id="codeHelp" class="form-text text-muted">write your code that you got at homepage.</small>
                        </div>
                        <button type="button" id='login' class="col-2 btn signin-btn">LogIn</button>
                      </form>
                  </div>
              </div>
          </div>
          <div class='col'></div>
        </div>
      </div>`);
};

