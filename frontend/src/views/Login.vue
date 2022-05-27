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
        <h2>Veuillez remplir les champs ci-dessous :</h2>
        <div class="home__form">
            <form action="">

                <div class="home__form__input">
                    <label id="labelEmail" for="email">            Email  </label>
                    <input type="email" name="email" id="email">
                     <i class="fas fa-check" id="emailTrue"></i>
                     <i class="fas fa-times" id="emailFalse"></i>
                    <p id="errorEmail"></p>
                </div>

                <div class="home__form__input">
                    <label id="labelPassword" for="password" >Mot de passe  </label>
                    <input type="password" name="password" id="password">
                     <i class="fas fa-check" id="passwordTrue"></i>
                     <i class="fas fa-times" id="passwordFalse"></i>
                    <p id="errorPassword"></p>
                </div>
                
                <button id="Check" @click="check"> Connexion </button>

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

.fa-check {
  color: rgb(8, 234, 4);
}
.fa-times {
  color: red;
}

#error{
  color: red;
  font-size: 125%;
  display: flex;
  justify-content: center;
  margin: 0 0 1rem 0;
}

a.router-link-exact-active {
  color: rgb(208,87,95);
  text-decoration: none;
}
a{
  color: #cfd3d9;
  text-decoration: none;

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
    width: 90%;
    margin: 3% 5% 3% 5%;
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
    font-size: 100%;
  }
  .home__form__input input {
    height: 20px;
    font-size: 100%;
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

/*# sourceMappingURL=style.css.map */


/*# sourceMappingURL=style.css.map */
</style>

<script>

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
    },
    methods: {
      onLoadLogin(){

        let regTxt = /^[A-Za-z]+$/;
        let regPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40}/
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let emailCheck = false;
        let passwordCheck = false;

        document.getElementById('passwordTrue').style.visibility = "hidden"
        document.getElementById("passwordFalse").style.visibility = "hidden"

        document.getElementById('emailTrue').style.visibility = "hidden"
        document.getElementById("emailFalse").style.visibility = "hidden"

        
        password.onkeyup = () =>{
          passwordCheck = regPassword.test(password.value);

          if (passwordCheck === true){
            document.getElementById("errorPassword")
            .innerHTML = "";

            document.getElementById('passwordTrue')
            .style.visibility = "visible"

            document.getElementById("passwordFalse")
            .style.visibility = "hidden"

          }else{
            document.getElementById("passwordFalse")
            .style.visibility = "visible"

            document.getElementById('passwordTrue')
            .style.visibility = "hidden"

            document.getElementById("errorPassword")
            .innerHTML = "Le mot de pass doit contenir : Maj, Min, Chiffre, Caractère spécial, Min 8 caractères .";

          }
        }
        email.onkeyup = () =>{
          emailCheck = regEmail.test(email.value);

          if (emailCheck === true){
            document.getElementById("errorEmail")
            .innerHTML = "";

            document.getElementById('emailTrue')
            .style.visibility = "visible"

            document.getElementById("emailFalse")
            .style.visibility = "hidden"
          }else{
            document.getElementById("emailFalse")
            .style.visibility = "visible"

            document.getElementById('emailTrue')
            .style.visibility = "hidden"

            document.getElementById("errorEmail")
            .innerHTML = "L'adresse email saisie n'est pas valide.";
          }
        }

        Check.onclick = (event) => {
          event.preventDefault()

          if(! passwordCheck || ! emailCheck){
            document.getElementById("error")
            .innerHTML = "Les champs ne sont pas remplis correctement."

          } else {
            let user = { password: password.value, email: email.value}
            console.log(user)

            fetch("http://localhost:5000/api/login", {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if(res.message === "L'utilisateur demandé n'existe pas."){
                   document.getElementById("error")
                  .innerHTML = "La combinaison du mot de passe et de l'adresse mail ne trouve aucun compte."
                  return
                }
                if (res.message === "Le mot de passe est incorrect."){
                  document.getElementById("error")
                  .innerHTML = "La combinaison du mot de passe et de l'adresse mail ne trouve aucun compte."
                }else {
                  let token = res.token;
                  console.log(token)


                  if (res.token !== undefined){
                  let Connexion = res.token;
                  localStorage.setItem("Token", JSON.stringify(Connexion))
                  localStorage.setItem("ID", res.data.id)

                  document.getElementById("error")
                  .innerHTML = "<span style='color: rgb(8, 234, 4); '>Connexion en cours...</span>"
                  


                  setTimeout("location.reload(true);",1000)

                  }
                }
            })


          }
        }
      },
     
    },

}
</script>