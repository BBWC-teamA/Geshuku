import { getUser } from '/function/firebase-auth.mjs';

document.addEventListener('DOMContentLoaded', (event) => {
    initMain();
});

const intMain = () => {
    if(getUser != NULL){
        document.getElementById("signin").innerHTML="<a class = 'heada' href = '/mypage'>マイページ</a>"
        document.getElementById("signup").innerHTML=""
    }
}

