import {getUser} from "/function/firebase-auth.mjs";

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


document.getElementById("likeButton").onclick = () => {
    console.log("111");
    //要素の取得 → 背景色を変える
    document.getElementById('likeButton').style.color='pink';
    var clubid = document.getElementById("likeButton").value;
    getUser(function(user) {
        if (user) {
            post('/like', {clubid: clubid, contact:user.email});
        }
    });
    
}

