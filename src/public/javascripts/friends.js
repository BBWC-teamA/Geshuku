import {getUser} from '/function/firebase-auth.mjs';

document.getElementById("return").onclick = () => {
    getUser(function(user) {
        if(user) {
            window.location.href = '/mypage/' + user.email;
        }
    })
}