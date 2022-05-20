<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- icones font awesome -->

        <header><img src="../img/icon-left-font-monochrome-black.svg"  class="logo" alt="logo">
        </header>

        <section class="home">
          <h1>Bienvenue</h1>
          <div>
              <ul>
                  <li><router-link to="/">Inscription</router-link></li>
                  <li><router-link to="/login">Connexion</router-link></li>
  
              </ul>
          </div>
          <h2>Veuillez remplir les champs ci-dessous </h2>
          <div class="home__form">
              <form>
  
                <div class="home__form__input">
                      <label id="labelPrenom" for="prenom" >Prénom   </label>
                      <input type="text" name="prenom" id="prenom" required="required">
                      <p id="errorPrenom"></p>
                  </div>
  
                  <div class="home__form__input">
                      <label id="labelNom" for="nom">Nom       </label>
                      <input type="text" name="nom" id="nom" required="required">
                      <p id="errorNom"></p>
                  </div>
  
                  <div class="home__form__input">
                      <label id="labelDate" for="date" >Date de naissance  </label>
                      <input type="date" name="date" id="date" required="required">
                      <p id="errorDate"></p>
                  </div>
  
                  <div class="home__form__input">
                      <label id="labelEmail" for="email">Email     </label>
                      <input type="email" name="email" id="email" required="required">
                      <p id="errorEmail"></p>
                  </div>
  
                  <div class="home__form__input">
                      <label id="labelPassword" for="password" >Mot de passe  </label>
                      <input type="password" name="password" id="password" required="required">
                      <p id="errorPassword"></p>
                  </div>

                  <button id="Check" > Inscription </button>

              </form>
          </div>
          <div id="error"></div>
  
        </section>
</template>

<style>
*{
  font-family: "Lato", sans-serif;
}
body {
  margin: 0;
}

header {
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;
}
header img {
  width: 20%;
  object-fit: cover;
}
#error{
  color: red;
  font-size: 125%;
  display: flex;
  justify-content: center;
  margin: 0 0 1rem 0;
}
.home {
  border: 1px solid black;
  width: 70%;
  margin: 3% 15% 3% 15%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f8;
}
.home h1 {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 250%;
  color: #152545;
  text-decoration: underline;
  text-decoration-color: #d0575f;
}
.home ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
  width: 100%;
}
.home ul li {
  border: 1px solid black;
  padding: 1% 2% 1% 2%;
  border-radius: 0.5rem;
  width: fit-content;
  background-color: #152545;
  color: white;
  margin: 0 5% 0 5%;
  font-size: 200%;
}
a.router-link-exact-active {
  color: rgb(208,87,95);
  text-decoration: none;
}
a{
  color: #cfd3d9;
  text-decoration: none;

}
.home h2 {
  display: flex;
  margin-left: 5%;
  justify-content: center;
  width: 90%;
  justify-content: center;
  font-size: 200%;
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}
.home__form {
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}
.home__form #Check {
  display: flex;
  all: unset;
  color: #d0575f;
  background: #152545;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0 0 35%;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background 0.5s;
  cursor: pointer;
}
.home__form__input {
  margin: 1rem 0 1rem 0;
  border-radius: 0.5rem;
  width: 100%;
  padding: 1%;
}
.home__form__input label {
  font-size: 125%;
}
.home__form__input input {
  height: 20px;
  font-size: 125%;
  color: black;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  border: 2px solid #4c5c6d;
}
.home__form__input p {
  display: flex;
  justify-content: center;
  font-size: 100%;
  font-style: italic;
  color: red;
  margin: 1.5%;
}

@media screen and (max-width: 768px) {
  header {
    display: flex;
    justify-content: center;
    margin: 2rem 0 0 0;
  }
  header img {
    width: 50%;
    object-fit: cover;
  }

  .home {
    border: 1px solid black;
    width: 70%;
    margin: 3% 15% 3% 15%;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f8;
  }
  .home h1 {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 250%;
    color: #152545;
    text-decoration: underline;
    text-decoration-color: #d0575f;
  }
  .home ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-bottom: 3rem;
    width: 100%;
  }
  .home ul li {
    border: 1px solid black;
    padding: 1% 2% 1% 2%;
    border-radius: 0.5rem;
    width: fit-content;
    background-color: #152545;
    color: white;
    margin: 0 5% 0 5%;
    font-size: 150%;
  }
  .home h2 {
    display: flex;
    margin-left: 5%;
    justify-content: center;
    width: 90%;
    justify-content: center;
    font-size: 150%;
    border-bottom: 2px solid black;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
  }
  .home__form {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
  }
  .home__form #Check {
    display: flex;
    all: unset;
    color: #d0575f;
    background: #152545;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0 0 35%;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background 0.5s;
    cursor: pointer;
  }
  .home__form__input {
    margin: 1rem 0 1rem 0;
    border-radius: 0.5rem;
    width: 100%;
    padding: 1%;
  }
  .home__form__input label {
    font-size: 125%;
  }
  .home__form__input input {
    height: 20px;
    font-size: 125%;
    color: black;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    border: 2px solid #4c5c6d;
  }
  .home__form__input p {
    display: flex;
    justify-content: center;
    font-size: 100%;
    font-style: italic;
    color: red;
    margin: 1.5%;
  }
}
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
        let regDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/

        let prenomCheck = false;
        let nomCheck = false;
        let dateCheck = false;
        let emailCheck = false;
        let passwordCheck = false;

        let error = document.getElementById('error')

        prenom.onkeyup = () =>{
          prenomCheck = regTxt.test(prenom.value);

          if (prenomCheck === true){
            document.getElementById('labelPrenom')
            .innerHTML = `Prénom  <i class="fas fa-check"></i>  `
            document.getElementById("errorPrenom")
            .innerHTML = ""
          }else{
            document.getElementById('labelPrenom')
            .innerHTML = `Prénom  <i class="fas fa-times"></i>  `
            document.getElementById("errorPrenom")
            .innerHTML = "Le prenom ne doit contenir que des lettres."
          }
        }
        nom.onkeyup = () =>{
          nomCheck = regTxt.test(nom.value);

          if (nomCheck === true){
            document.getElementById('labelNom')
            .innerHTML = `Nom  <i class="fas fa-check"></i>  `
            document.getElementById("errorNom")
            .innerHTML = "";
          }else{
            document.getElementById('labelNom')
            .innerHTML = `Nom  <i class="fas fa-times"></i>  `
            document.getElementById("errorNom")
            .innerHTML = "Le nom ne doit contenir que des lettres.";
          }
        }
        date.onkeyup = () =>{
          dateCheck = regDate.test(date.value);

          if (dateCheck === true){
            document.getElementById('labelDate')
            .innerHTML = `Date de naissance  <i class="fas fa-check"></i>  `
            document.getElementById("errorDate")
            .innerHTML = "";
          }else{
            document.getElementById('labelDate')
            .innerHTML = `Date de naissance  <i class="fas fa-times"></i>  `
            document.getElementById("errorDate")
            .innerHTML = "La date n'est pas remplie correctement.";
          }
        }
        password.onkeyup = () =>{
          passwordCheck = regPassword.test(password.value);

          if (passwordCheck === true){
            document.getElementById("labelPassword")
            .innerHTML = `Mot de passe  <i class="fas fa-check"></i>  `
            document.getElementById("errorPassword")
            .innerHTML = "";
          }else{
            document.getElementById("labelPassword")
            .innerHTML = `Mot de passe  <i class="fas fa-times"></i>  `
            document.getElementById("errorPassword")
            .innerHTML = "Le mot de pass doit contenir : Maj, Min, Chiffre, Caractère spécial, Min 8 caractères .";

          }
        }
        email.onkeyup = () =>{
          emailCheck = regEmail.test(email.value);

          if (emailCheck === true){
            document.getElementById('labelEmail')
            .innerHTML = `Email  <i class="fas fa-check"></i>  `
            document.getElementById("errorEmail")
            .innerHTML = "";
          }else{
            document.getElementById('labelEmail')
            .innerHTML = `Email  <i class="fas fa-times"></i>  `
            document.getElementById("errorEmail")
            .innerHTML = "L'adresse email saisie n'est pas valide.";
          }
        }

        Check.onclick = (event) => {
          event.preventDefault()

          if (regDate.test(date.value) === false 
          || regTxt.test(prenom.value) === false
          || regTxt.test(nom.value) === false
          || regPassword.test(password.value) === false 
          || regEmail.test(email.value) === false){

              document.getElementById("error")
              .innerHTML = "Tous les champs ne sont pas remplis correctement."

            
          }
          else{
          fetch(`http://localhost:5000/api/mail/${email.value}`,{
            headers: {
                "Content-type": "application/json",
            },
          })
          .then((res) => res.json())
          .then((res) => {
            if(res.error === "Open"){
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
                  setTimeout("location.reload(true);",400)
                })
            }
            
            // LOG ERREUR MAIL DÉJA PRIS
            else{
              document.getElementById("error")
              .innerHTML = "L'adresse email est déjà associée à un compte"
            }
          })
          }
        }
   
      },

    },

}
</script>