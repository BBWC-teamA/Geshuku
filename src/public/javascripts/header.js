import { getUser } from '/function/firebase-auth.mjs';
import { userSignOut } from '/function/firebase-auth.mjs';

document.addEventListener('DOMContentLoaded', (event) => {
    initMain();
});

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

            document.getElementById("mypage").onclick = () => {
                window.location.href = '/mypage/' + user.email;
            }

        }
    });
  
}




