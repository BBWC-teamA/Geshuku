import { getUser } from "/function/firebase-auth.mjs";

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

document.getElementById("submitButton").onclick = (event) => {
    event.preventDefault();
    
    getUser(function(user) {
        if (user) {
            var myform = document.forms[0];
            
            const mycheckbox = document.getElementsByName("mycheckbox");
            var tagArray = [];
            for(let i=0; i<mycheckbox.length; i++) {
                if (mycheckbox[i].checked){
                    tagArray.push(mycheckbox[i].value);
                }
            }

            const data = {
                name: myform.name.value,
                department: myform.department.value,
                contact: user.email,
                tags: tagArray
            }
            
            post('/setInfo', data);
        } else {
            console.log('ログアウトしています')
            window.location.href = '/signup';
        }
    });
};