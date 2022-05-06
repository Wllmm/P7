<template>
 
  <Log />

</template>

<script>
import Log from '@/components/Connexion.vue'

let Token = localStorage.getItem('Token')

if (Token) {
  window.location.href = "/accueil"

}

export default {
    mounted(){
      this.onLoadLogin();
    },
    name: 'login',
    props: '',
    data(){
      return {
        Token : JSON.parse(localStorage.getItem("Token"))
      }
    },
    computed:{
    },    
    components: {
      Log,
    },
    methods: {
      onLoadLogin(){
        document.getElementById('Check').innerText = "Connexion"
        document.getElementById('errorUsername').innerText = "Nom d'utilisateur"

        let regTxt = /^[A-Za-z]+$/;
        let regPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40}/
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let usernameCheck = false;
        let emailCheck = false;
        let passwordCheck = false;

        username.onkeyup = () =>{
          usernameCheck = regTxt.test(username.value);

          if (usernameCheck === true){
            document.getElementById("errorUsername")
            .innerHTML = `Choissisez un nom d'utilisateur : <i class="fas fa-lock-open"></i>`;
          }else{
            document.getElementById("errorUsername")
            .innerHTML = ` Nom d'utilisateur : <i class="fas fa-ban"></i>`;
          }
        }
        password.onkeyup = () =>{
          passwordCheck = regPassword.test(password.value);

          if (passwordCheck === true){
            document.getElementById("errorPassword")
            .innerHTML = `Mot de passe : <i class="fas fa-lock-open"></i>`;
          }else{
            document.getElementById("errorPassword")
            .innerHTML = ` Mot de passe : <i class="fas fa-ban"></i>`;
          }
        }
        email.onkeyup = () =>{
          emailCheck = regEmail.test(email.value);

          if (emailCheck === true){
            document.getElementById("errorEmail")
            .innerHTML = `Email : <i class="fas fa-lock-open"></i>`;
          }else{
            document.getElementById("errorEmail")
            .innerHTML = ` Email : <i class="fas fa-ban"></i>`;
          }
        }
        Check.onclick = (event) => {
          event.preventDefault()

          function testAllCheck(){
            if(!usernameCheck ||
              ! passwordCheck ||
              ! emailCheck){
            } else {

              let user = { username: username.value, password: password.value, email: email.value}
              console.log(user)

              fetch("http://localhost:3000/api/login", {
                  method: 'POST',
                  body: JSON.stringify(user),
                  headers: {
                      "Content-type": "application/json",
                  },
              })
              .then((res) => res.json())
              .then((res) => {
                  console.log(res);
                  let token = res.token;
                  console.log(token)


                  if (res.token !== undefined){
                  let Connexion = res.token;
                  localStorage.setItem("Token", JSON.stringify(Connexion))

                  }
              })
            }
        }
        testAllCheck();
        setTimeout("location.reload(true);",400)

        }
      },
    },

}
</script>