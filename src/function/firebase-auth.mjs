// firebase
import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCEOHgcw8C-1WGWgdWMtQ129V-e6uzdP-M",
    authDomain: "bbwc-ateam.firebaseapp.com",
    projectId: "bbwc-ateam",
    storageBucket: "bbwc-ateam.appspot.com",
    messagingSenderId: "879571095672",
    appId: "1:879571095672:web:64b28599353bbbc85e9d8d",
    measurementId: "G-Y2ZJP5317E"
};

let firebaseApp;
try {
    firebaseApp = initializeApp(firebaseConfig);
} catch(error) {
    console.log("既にfirebaseAppは存在しています");
}
const auth = getAuth();

const userSignUp = (email, password, callback) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        callback(user);
        alert("サインアップ成功");
    })
    .catch(error => {
    console.log("signup error");
    let errorCode = error.code;
    let errorMessage = error.message;
    // TODO: アラートじゃなくてエラーメッセージにする
    if (
        errorMessage ===
        "The email address is already in use by another account."
    ) {
        alert("サインアップ失敗:このメールアドレスはすでに使用されています");
    } else {
        console.log(errorMessage);
        alert("サインアップ失敗: " + errorCode + ", " + errorMessage);
    }
    });
  };

const userSignIn = (email, password, callback) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        callback(user);
        // alert("ログイン成功");
    })
    .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert("ログイン失敗: " + errorCode + ", " + errorMessage);
    });
};

const userSignOut = (callback) => {
    signOut(auth).then(function() {
        // alert("サインアウト成功");
        callback();
    })
    .catch(function(error) {
        console.log(error);
        // alert("サインアウト失敗");
    });
  };

const getUser = (callback) => {
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        callback(user);
    });
}

export {userSignUp, userSignIn, userSignOut, getUser};