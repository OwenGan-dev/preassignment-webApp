window.onload = () => {
    if(!sessionStorage.userName){
        location.href = '/login';
    } else{
        
    }
}

const logout = document.querySelector('.logoutButton');

logout.onclick = () => {
    sessionStorage.clear();
    location.reload();
}