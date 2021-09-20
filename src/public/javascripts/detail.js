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

var clubid = document.getElementById("likeButton").value;

document.getElementById("likeButton").onclick = () => {
    console.log("111");
    //要素の取得 → 背景色を変える
    document.getElementById('likeButton').style.color='pink';
    getUser(function(user) {
        if (user) {
            post('/like', {clubid: clubid, contact:user.email});
        }
    });
    
}

window.onload = () => {
    var checkElements = document.getElementsByClassName("check");
    for (let i=0; i<checkElements.length; i++) {
        checkElements[i].onclick = () => {
            var eventid = checkElements[i].getAttribute("event-id");
            getUser(function(user) {
                if (user) {
                    post('/reserve', {eventid:eventid, contact:user.email, clubid:clubid});
                }
            })
        }
    }
}

