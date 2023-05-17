function main() {
  const passwords = document.querySelectorAll('.passwords');
  const password_og = document.querySelector('#password');
  const confirm_password = document.querySelector('#confirm_password');
  passwords.forEach(password => {
    password.addEventListener('blur', ()=>{
      if(password_og.value!=confirm_password.value){
        password_og.setCustomValidity("blablabla");
        confirm_password.setCustomValidity("blabla");
      }
      else {
        password_og.setCustomValidity("");
        confirm_password.setCustomValidity("");
      }
    })
  });
}

main()