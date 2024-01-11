const userName = document.querySelector('.userName');
const password = document.querySelector('.password');
const loginButton = document.querySelector('.loginButton');

loginButton.addEventListener('click',loginUser);
loginButton.addEventListener('click',getAllMessages);

async function loginUser(e){
    e.preventDefault();
    res = await fetch('/loginUser', {
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

async function getAllMessages(e){
    e.preventDefault();
    res = await fetch('/getAllmessage',{
        method: 'GET',
    })
    const messages = await res.json()
    
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
