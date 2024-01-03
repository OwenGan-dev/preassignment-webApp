const userName = document.querySelector('.userName');
const password = document.querySelector('.password');
const createButton = document.querySelector('.createButton');


createButton.addEventListener('click', () => {
    fetch('/saveUser', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            userName: userName.value,
            password: password.value
        })
    })
    .then(res => res.json())
})
