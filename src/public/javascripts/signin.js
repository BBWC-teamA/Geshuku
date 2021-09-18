import { userSignIn } from '/function/firebase-auth.mjs';

var submit = document.getElementById("submit");

submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    console.log(email)
    console.log(pass)

    userSignIn(email, pass, function(user) {
      console.log(user);
      window.location.href = '/';
    });

  })