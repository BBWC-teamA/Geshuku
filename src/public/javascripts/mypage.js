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

document.getElementById("friends").onclick = () => {
    getUser(function(user) {
        if (user) {
            post('/friends', {contact:user.email});
        }
    })
}

window.onload = () => {
    var checkElements = document.getElementsByClassName("check");
    for (let i=0; i<checkElements.length; i++) {
        checkElements[i].onclick = () => {
            var studentid = checkElements[i].getAttribute("student-id");
            var clubid = checkElements[i].getAttribute("club-id");
            console.log(studentid);
            getUser(function(user) {
                if (user) {
                    post('/follow', {studentid:studentid, contact:user.email, clubid:clubid});
                }
            })
        }
    }
}

