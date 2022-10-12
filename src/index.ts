
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('signup')?.addEventListener('click', () => {
        let username = document.getElementById('username') as HTMLInputElement;
        if (username.value.length > 30 || username.value.length < 6){
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

          let remail = document.getElementById('re-email') as HTMLInputElement;

          if (remail.value != email.value){
            alert("A két email nem egyezik");
          }

          let password = document.getElementById('password') as HTMLInputElement;

          if (password.value.length < 5 || password.value.length > 10) {
            alert("A jelszó hossza nem megfelelő")
          }
    })

})
