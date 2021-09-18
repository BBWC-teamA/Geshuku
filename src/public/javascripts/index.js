

var log_submit = document.getElementById("log_submit");
var s_submit = document.getElementById("s_submit");

log_submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);

  })

  
  s_submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    console.log(document.getElementById("s_email").value);
    console.log(document.getElementById("s_password").value);

  })
  
