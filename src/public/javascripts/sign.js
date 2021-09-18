

var submit = document.getElementById("submit");
//var s_submit = document.getElementById("s_submit");

submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;
    rpass = document.getElementById("re_password");

    if(pass != rpass.value){
        rpass.insertAdjacentHTML("afterend","<br>パスワードが違います</br>");
        rpass.value = '';
        return false;
    }

    console.log(email)
    console.log(pass)
  })

  /*
  s_submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    console.log(document.getElementById("s_email").value);
    console.log(document.getElementById("s_password").value);

  })*/
  
