import { getUser } from '/function/firebase-auth.mjs';
import { userSignOut } from '/function/firebase-auth.mjs';

document.addEventListener('DOMContentLoaded', (event) => {
    initMain();
});

const initMain = () => {

    getUser(function(user){ 
        if(user){
            document.getElementById("reco_c").innerHTML="<h1>おすすめサークル情報</h1>"
            document.getElementById("reco_e").innerHTML="<h1>おすすめイベント情報</h1>"
       
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
        }
    });
  
}