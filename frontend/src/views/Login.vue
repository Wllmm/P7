<template>
 
  <Log />

</template>

<script>
import Log from '@/components/Connexion.vue'

let Token = localStorage.getItem('Token')


// Besoin de vérifier si le token est valide
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
        let test = document.getElementsByClassName('home__form')
        test[0].innerHTML = 
          `<form action="">
            <div class="home__form__input">
                <label for="email" id="errorEmail">Email :</label>
                <input type="email" name="emaillog" id="emaillog">
            </div>

            <div class="home__form__input">
                <label for="password" id="errorPassword">Mot de passe :</label>
                <input type="password" name="passwordlog" id="passwordlog">
            </div>

            <div class="home__form__input">
                <label for="username" id="errorUsername">Choisissez un nom d'utilisateur :</label>
                <input type="text" name="usernamelog" id="usernamelog">
            </div>
        </form>`

        document.getElementById('Check').innerText = "Connexion"
        document.getElementById('errorUsername').innerText = "Nom d'utilisateur :"

        let regTxt = /^[A-Za-z]+$/;
        let regPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40}/
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let usernameCheck = false;
        let emailCheck = false;
        let passwordCheck = false;

        usernamelog.onkeyup = () =>{
          usernameCheck = regTxt.test(usernamelog.value);

          if (usernameCheck === true){
            document.getElementById("errorUsername")
            .innerHTML = `Nom d'utilisateur : <i class="fas fa-lock-open"></i>`;
          }else{
            document.getElementById("errorUsername")
            .innerHTML = ` Nom d'utilisateur : <i class="fas fa-ban"></i>`;
          }
        }
        passwordlog.onkeyup = () =>{
          passwordCheck = regPassword.test(passwordlog.value);

          if (passwordCheck === true){
            document.getElementById("errorPassword")
            .innerHTML = `Mot de passe : <i class="fas fa-lock-open"></i>`;
          }else{
            document.getElementById("errorPassword")
            .innerHTML = ` Mot de passe : <i class="fas fa-ban"></i>`;
          }
        }
        emaillog.onkeyup = () =>{
          emailCheck = regEmail.test(emaillog.value);

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

              let user = { username: usernamelog.value, password: passwordlog.value, email: emaillog.value}
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
                  localStorage.setItem("ID", res.data.id)

                  }
              })
            }
        }
        testAllCheck();
        setTimeout("location.reload(true);",300)

        }
      },
      check(){
        console.log('ok')
      },
    },

}
</script>