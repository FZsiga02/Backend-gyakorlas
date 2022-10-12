
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('signup')?.addEventListener('click', () => {
        let success = true;
        let username = document.getElementById('username') as HTMLInputElement;
        if (username.value.length > 30 || username.value.length < 6){
            alert("A felhasználónév nem megfelelő")
            success = false;
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
            success = false;
          }

          let password = document.getElementById('password') as HTMLInputElement;

          if (password.value.length < 5 || password.value.length > 10) {
            alert("A jelszó hossza nem megfelelő")
            success = false;
          }

          let repassword = document.getElementById('repassword') as HTMLInputElement;

          if ( repassword.value != password.value){
            alert("A két jelszó nem egyezik")
            success = false;
          }
    })

})
