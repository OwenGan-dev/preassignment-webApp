const userName = document.querySelector('.userName');
const password = document.querySelector('.password');
const createButton = document.querySelector('.createButton');


createButton.addEventListener('click', saveUser);


async function saveUser(e){
    e.preventDefault();
    res = await fetch('/saveUser', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            userName: userName.value,
            password: password.value
        })
    })
    const data = await res.json()
    Datahandler(data)
}


const Datahandler = (data) => {
    if(!data.userName) {
        alert(data);
    }
    else {
        sessionStorage.userName = data.userName;
        sessionStorage.password = data.password;
        location.href = '/';
    }
}

const alert = (data) => {
    alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = data;
}