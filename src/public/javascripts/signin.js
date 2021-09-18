var submit = document.getElementById("submit");

submit.addEventListener('click', (e) => {
    // 規定の動作をキャンセル
    e.preventDefault();
    // イベント発生時に行う処理
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;

    console.log(email)
    console.log(pass)
  })