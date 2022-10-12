
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('signup')?.addEventListener('click', () => {
        let username = document.getElementById('username') as HTMLInputElement;
        if (username.value.length >= 30 || username.value.length <= 6){
            alert("A felhasználónév nem megfelelő")
        }

        let email = document.getElementById('email') as HTMLInputElement;

        const validateEmail = (email : string) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };
        
          validateEmail(email.value);
    })

})
