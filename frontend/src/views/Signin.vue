<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- icones font awesome -->

      <section class="home">
        <h1>Groupomania</h1>
        <div>
            <ul>
                <li><router-link to="/">Inscription</router-link></li>
                <li><router-link to="/login">Connexion</router-link></li>

            </ul>
        </div>
        <h2>Veuillez remplir les champs ci-dessous :</h2>
        <div class="home__form">
            <form>

              <div class="home__form__input">
                    <label for="prenom" id="errorPrenom">Prénom :</label>
                    <input type="text" name="prenom" id="prenom">
                </div>

                <div class="home__form__input">
                    <label for="nom" id="errorNom">Nom :</label>
                    <input type="text" name="nom" id="nom">
                </div>

                <div class="home__form__input">
                    <label for="date" id="errorDate">Date de naissance :</label>
                    <input type="date" name="date" id="date">
                </div>

                <div class="home__form__input">
                    <label for="email" id="errorEmail">Email :</label>
                    <input type="email" name="email" id="email">
                </div>

                <div class="home__form__input">
                    <label for="password" id="errorPassword">Mot de passe :</label>
                    <input type="password" name="password" id="password">
                </div>

            </form>
        </div>
        <button id="Check" > Inscription </button>
        <div id="error"></div>

      </section>

</template>

<style>
#error h2{
  text-decoration: none;
  color: red;
}

* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0%;
}

.home {
  border-radius: 1rem;
  width: 80%;
  margin: 10% 0 10% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e2e5;
}
.home h1 {
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 1rem;
  color: #152545;
  text-decoration: underline;
  text-decoration-color: #d0575f;
}
.home h2 {
  color: #626e81;
  font-size: 1.5rem;
  text-decoration: overline;
}
.home ul {
  display: flex;
  padding: 0%;
}
.home ul li {
  list-style: none;
  margin: 1rem 2rem 0 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  background-color: #152545;
  border-radius: 0.5rem;
}
.home ul li:visited {
  list-style: none;
  margin: 1rem 2rem 0 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  background-color: #152545;
  border-radius: 0.5rem;
}
a.router-link-exact-active {
  color: rgb(208,87,95);
  text-decoration: none;
}
a{
  color: #cfd3d9;
  text-decoration: none;

}
.home button {
  all: unset;
  color: #d0575f;
  background: #152545;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.5s;
}
.home button:hover {
  font-weight: bold;
  color: #152545;
  background: #d0575f;
  cursor: pointer;
}
.home__form__input {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  /* border: 1px solid black; */
}
.home__form__input label {
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #d0575f;
  font-weight: bolder;
}
.home__form__input input {
  border: none;
  border-radius: 0.5rem;
  background-color: #4c5c6d;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  width: 15rem;
}

.home__form i {
  color: rgb(29, 168, 45);
  font-weight: bold;
  /* border: 1px solid black; */
  margin: 0;
  display: flex;
  margin: 0.6rem 0 0.1rem 0;
  align-content: center;
  margin-left: 1rem;
  font-size: 1.2rem;
  height: 90%;
}
.home__form .fa-ban{
  color: red;
  font-weight: bold;
  /* border: 1px solid black; */
  margin: 0;
  display: flex;
  margin: 0.3rem 0 0.1rem 0;
  align-content: center;
  margin-left: 1rem;
  font-size: 1.5rem;
  height: 90%;

}

/*# sourceMappingURL=style.css.map */
</style>

<script>
let Token = localStorage.getItem('Token')

if (Token) {
  window.location.href = "/accueil"

}





import axios from 'axios';
export default {
    mounted(){
      this.onLoad();
    },
    name: 'Signin',
    props: '',
    data(){
      return {
        Token : JSON.parse(localStorage.getItem("Token")),
        file: "",
        message:""
      }
    },
    computed:{
 
    },
    components: {
    },
    methods: {
      onLoad(){
        let regTxt = /^[A-Za-z]+$/;
        let regPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40}/
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let prenomCheck = false;
        let nomCheck = false;
        // let dateCheck = false;
        let emailCheck = false;
        let passwordCheck = false;



        prenom.onkeyup = () =>{
          prenomCheck = regTxt.test(prenom.value);

          if (prenomCheck === true){
            document.getElementById("errorPrenom")
            .innerHTML = `Prénom : <i class="fas fa-lock-open"></i>`;
          }else{
            document.getElementById("errorPrenom")
            .innerHTML = ` Prénom : <i class="fas fa-ban"></i>`;
          }
        }
        nom.onkeyup = () =>{
          nomCheck = regTxt.test(nom.value);

          if (nomCheck === true){
            document.getElementById("errorNom")
            .innerHTML = `Nom : <i class="fas fa-lock-open"></i>`;
          }else{
            document.getElementById("errorPrenom")
            .innerHTML = ` Nom : <i class="fas fa-ban"></i>`;
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
          fetch(`http://localhost:5000/api/mail/${email.value}`,{
            headers: {
                "Content-type": "application/json",
            },
          })
          .then((res) => res.json())
          .then((res) => {

            // On vérifie si tout les champs sont corrects, si oui on Post le nouvel User
            function testAllCheck(){
              if(!prenomCheck || ! passwordCheck || ! emailCheck || !nomCheck){

              } 
              else {
                let user = { prenom: prenom.value, nom: nom.value, date: date.value,  password: password.value, email: email.value}
                console.log(user)
                fetch("http://localhost:5000/api/users", {
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

            console.log(res.error)

            if (res.error == "Open") {
              console.log("Le mail est open")

              testAllCheck();
              setTimeout("location.reload(true);",400)

            } else { console.log('Le mail est déjà utilisé'), alert("Le mail est déjà utilisé") }
          })
        }
   
      },

    },

}
</script>