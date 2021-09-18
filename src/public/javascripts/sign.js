import { userSignUp } from '/function/firebase-auth.mjs';

var submit = document.getElementById("submit");
//var s_submit = document.getElementById("s_submit");

submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const rpass = document.getElementById("re_password");

    if(pass == rpass.value){
      console.log(email)
      console.log(pass)
      userSignUp(email, pass, function(user) {
        console.log(user);
        window.location.href = '/';
      });
    } else {
        rpass.insertAdjacentHTML("afterend","<br>パスワードが違います</br>");
        rpass.value = '';
    }

    
  })

  /*
  s_submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    console.log(document.getElementById("s_email").value);
    console.log(document.getElementById("s_password").value);

  })*/
  
