window.onload = () => {
    if(!sessionStorage.userName){
        location.href = '/login';
    } else{
        getAllMessages();
    }
}

async function getAllMessages(){
    res = await fetch('/getAllmessage',{
        method: 'GET',
    })
    const messages = await res.json() 
    const body = document.querySelector('.messages');
    body.innerHTML = JSON.stringify(messages);
}

//logout button action
const logout = document.querySelector('.logoutButton');

logout.onclick = () => {
    sessionStorage.clear();
    location.reload();
}

//post button action
const postButton = document.querySelector('.postButton');

postButton.addEventListener('click',postMessage)

async function postMessage(e) {
    e.preventDefault();
    res = fetch('/postMessage')
}