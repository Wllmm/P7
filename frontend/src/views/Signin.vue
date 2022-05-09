<template>

  <Log />

</template>

<style>
#error h2{
  text-decoration: none;
  color: red;
}
</style>

<script>
import Log from '@/components/Connexion.vue'

let Token = localStorage.getItem('Token')

if (Token) {
  window.location.href = "/accueil"

}


export default {
    mounted(){
      this.onLoad();
    },
    name: 'Button',
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
      onLoad(){
        document.getElementById('Check').innerText = "Inscription"


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

          console.log(email.value)

          // On regarde si le mail n'est pas déjà utilisé pour pas faire planter le backend
          fetch(`http://localhost:3000/api/mail/${email.value}`,{
            headers: {
                "Content-type": "application/json",
            },
          })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.error)
            if (res.error == "Open") {
              console.log("Le mail est open")

              testAllCheck();
              setTimeout("location.reload(true);",400)

            } else { console.log('Le mail est déjà utilisé'), alert("Le mail est déjà utilisé") }
          })

          // On vérifie si tout les champs sont corrects, si oui on Post le nouvel User
          function testAllCheck(){
            if(!usernameCheck ||
              ! passwordCheck ||
              ! emailCheck){
            } else {
              let user = { username: username.value, password: password.value, email: email.value}
              console.log(user)
              
              fetch("http://localhost:3000/api/users", {
                  method: 'POST',
                  body: JSON.stringify(user),
                  headers: {
                      "Content-type": "application/json",
                  },
              })
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
              })
            }
          }




        }
   
      },
    },

}
</script>