import { userSignIn } from '/function/firebase-auth.mjs';

var submit = document.getElementById("submit");

const post = (path, params, method='post') => {
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

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
      post('/', {contact:email});
    });

})