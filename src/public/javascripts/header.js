import { getUser } from '/function/firebase-auth.mjs';
import { userSignOut } from '/function/firebase-auth.mjs';

document.addEventListener('DOMContentLoaded', (event) => {
    initMain();
});

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

const initMain = () => {

    getUser(function(user){ 
        if(user){
            document.getElementById("signin").innerHTML="<a class = 'heada' id='mypage'>マイページ</a>"
            document.getElementById("signup").innerHTML="<a id = logout class = 'heada' href = '/'>ログアウト</a>"
       
            var logout = document.getElementById("logout");
            // if (!logout){ return false;}
            logout.addEventListener('click', (e) => {
                // 規定の動作をキャンセル
                e.preventDefault();
                // イベント発生時に行う処理
                
                userSignOut(function() {
                    window.location.href = '/';
                });
            })

            document.getElementById("returnmain").onclick = () => {
                post('/', {contact:user.email});
            }

            document.getElementById("mypage").onclick = () => {
                console.log("mypage押されたよ")
                window.location.href = '/mypage/' + user.email;
            }

        } else {
            document.getElementById("returnmain").onclick = () => {
                window.location.href = '/';
            }
        }
    });
  
}




