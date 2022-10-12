
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('signup')?.addEventListener('click', () => {
        let username = document.getElementById('username') as HTMLInputElement;
        if (username.value.length >= 30 || username.value.length <= 6){
            alert("A felhasználónév nem megfelelő")
        }
    })

})
