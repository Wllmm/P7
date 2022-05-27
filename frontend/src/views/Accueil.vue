<template>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Lato:wght@300&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <header> <img src="../img/icon-left-font-monochrome-black.svg" alt="Logo groupomania"></header>


    <div id='hide'></div>


    <section class="profil">
        <div class="profil__image" >
            <img class="imageProfil" src="localhost:5000/uploads/" alt="">
            

            <form id="profils" @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="fields">
                  <label for="file">Changer de photo de profil</label>
                  <input id="file" type="file" ref="file" @change="onSelect" />
                </div>
                <br>
                <div class="fields">
                  <button id="putPicture">Valider le changement de photo </button>
                </div>
            </form>


            <i class="fas fa-home" @click="returnHome"></i>
        </div>

        <div class="profil__infoUser">

            <div class="email">
                <h2 id="profilEmail"> Nom d'utilisateur </h2>
                <label for="newEmail" id="emailLabel"> Changer l'addresse email : </label>
                <input type="text" id="newEmail">
                <i class="fas fa-magic" id="emailValid"></i>

            </div>
            <div class="password">
                <h2 id="profilPassword"> Modifier le mot de passe </h2>
                <label for="newPassword" id="passwordLabel"> Changer le mot de passe : </label>
                <input type="text" id="newPassword">
                <i class="fas fa-magic" id="passwordValid"></i>
            </div>
            <span> <button id="deleteAccount" @click="deleteAccount"> Supprimer le compte </button> </span>

        </div>
    </section>

    <div class="createPost">
      
          <form id="createPost" @submit.prevent="onSubmitPost" enctype="multipart/form-data">

              <div class="createPost__head">
                <img class="imageProfil" src="localhost:5000/uploads/" alt="">

                <div class="createPost__head__title">
                    <label for="newPostTitle"> Titre : </label>
                    <input type="text" id="newPostTitle">
                    
                </div>
                <i class="fas fa-times"></i>
              </div>
              
              <div class="createPost__content">
                  <label for="newPostContent"> Votre texte ici :</label>
                  <textarea rows="10" cols="90" id="newPostContent" maxlength="1000"></textarea>
              </div>

              <div class="createPost__files">
                <label for="image_input">Choissisez votre image</label>
                  <input id="image_input" type="file" ref="filePost" @change="onSelectPost" />
              </div>
              
                <br><br>

              <div class="button">
                <button>Poster ! </button>
              </div>

          </form>


    </div>
    
    <section class="accueil">
        <div class="accueil__post"> 
            <div class="accueil__post__add">
                <img class="imageProfil" src="" alt="">
                <form action="post">
                    <label for="addPost">Créer un Post</label>
                    <input type="text" id="addPost">
                    <i class="far fa-plus-square"></i>
                </form>
            </div>

            <div id="showPost"></div>


        </div>
       <div class="accueil__profil" id="profil"> 
            <div id="accueil__profil__always"> 
                <h1 id="username"> Usernames </h1>
            </div>
            <div id="accueil_profil__active">
                <h2 @click="profilUser" id="profilUser"> Profil </h2>
                <h2 @click="disconnect" id="disconnect"> Déconnexion </h2>
            </div>

        </div>
    </section>
    
</template>

<style lang="css">

body {
  margin: 0;
}

#app {
  /* border: 1px solid black; */
  /* min-height: 100%; */
  min-height: 70rem;
  position: relative;
}
#hide {
  display: block;
  position: absolute;
  background-color: #152545;
  opacity: 70%;
  display: none;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

}

#noPost {
display: flex;
justify-content: center;
margin-top: 2rem;
border: 1px solid black;
border-radius: 0.5rem;
color: red;
font-weight: bold;
padding: 0.5rem 0 0.5rem 0;
}

.fa-times:hover{
  color: red;
}
.fa-check:hover{
  color: rgb(5, 198, 18);
}
.fa-pen-alt:hover{
  color: #0e47b9;
}
.fa-trash:hover{
  color: red;
}
.fa-share:hover{
  color: rgb(177, 177, 7);
}
.new__comment {
  border: 1px solid black;
  margin: 1rem 0 1rem 0;
  padding: 0 1rem 0 1rem;
}
.new__comment h4 {
  color: #152545;
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0.5rem;
  border-bottom: 1px solid #d0575f;
}
.new__comment p {
  font-size: 100%;
  margin-top: 1rem;
}
.new__comment button {
  all: unset;
  cursor: pointer;
  font-size: 1.5rem;
}

.accueil__post__show {
  /* border: 2px solid black; */
  border-radius: 0.2rem;
  margin-top: 3rem;
  background-color: #15254533;
}
.accueil__post__show__element {
  display: flex;
  padding: 0.5rem;
}
.accueil__post__show__element img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-top: 1rem;
}
.accueil__post__show__element__content__text {
  border: 1px solid white;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: #eaeaea;
}
.accueil__post__show__element__content__text h1 {
  margin-top: 0;
  font-size: 120%;
}
.accueil__post__show__element__content__text h2 {
  margin-bottom: 0;
  padding: 0 1rem 0 1rem;
  width: fit-content;
  color: #d0575f;
  font-weight: bold;
}
.accueil__post__show__element__content__text h3 {
  margin-top: 0.5rem;
  font-size: 100%;
  padding: 0 1rem 0 1rem;
}
.accueil__post__show__element__content__text img {
  width: 100%;
  height: max-content;
  max-height: 20rem;
  object-fit: cover;
}
.accueil__post__show__element__content__text button {
  all: unset;
  cursor: pointer;
  margin-right: 1rem;
  font-size: 1.5rem;
}
.accueil__post__show__element__content__comment {
  border: 1px solid white;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #eaeaea;
}
.accueil__post__show__element__content__comment h3 {
  margin-top: 0;
}
.accueil__post__show__element__content__comment__add {
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(183, 180, 180);
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.accueil__post__show__element__content__comment__add label {
  margin-bottom: 1rem;
}
.accueil__post__show__element__content__comment__add i {
  font-size: 1.5rem;
  margin-left: 1rem;
  color: #152545;
  cursor: pointer;
}
.accueil__post__show__element__content__comment__add span {
  display: flex;
  align-items: center;
}
.accueil__post__show__element__content__comment textarea {
  outline: none;
  resize: none;
  width: 50%;
  height: 2rem;
}
.modify__title {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}
.modify__title label {
  margin-bottom: 0.5rem;
  font-size: 140%;
  font-weight: bold;
  color: #d0575f;
}
.modify__title input {
  font-size: 100%;
  width: 60%;
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.modify__content {
  border: 1px solid black;
  padding: 0.5rem;
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
}
.modify__content label {
  font-size: 140%;
  color: #d0575f;
  font-weight: bold;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
}
.modify__content textarea {
  outline: none;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-top: 1rem;
  resize: none;
  width: 80%;
  border: none;
  border-radius: 0.5rem;
}

@media screen and (max-width: 768px) {
  body {
    /* border: 2px solid red; */
    width: max-content;
  }


  .new__comment {
    border: 1px solid black;
    margin: 1rem 0 1rem 0;
    padding: 0 1rem 0 1rem;
  }
  .new__comment h4 {
    color: #152545;
    font-size: 120%;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0.5rem;
    border-bottom: 1px solid #d0575f;
  }
  .new__comment p {
    font-size: 100%;
    margin-top: 1rem;
  }
  .new__comment button {
    all: unset;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .accueil__post__show {
    /* border: 2px solid black; */
    border-radius: 0.2rem;
    margin-top: 3rem;
    background-color: #15254533;
  }
  .accueil__post__show__element {
    display: flex;
    padding: 0.5rem;
  }
  .accueil__post__show__element img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 0.5rem;
   margin-top: 1rem;
  }
  .accueil__post__show__element__content__text {
    border: 1px solid white;
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #eaeaea;
  }
  .accueil__post__show__element__content__text h4 {
    margin-top: 0;
    font-size: 120%;
  }
  .accueil__post__show__element__content__text h1 {
    margin-bottom: 0;
    padding: 0 1rem 0 1rem;
    width: fit-content;
    color: #d0575f;
    font-weight: bold;
  }
  .accueil__post__show__element__content__text h3 {
    margin-top: 0.5rem;
    font-size: 100%;
  }
  .accueil__post__show__element__content__text img {
    width: 100%;
    height: max-content;
    max-height: 20rem;
    object-fit: cover;
  }
  .accueil__post__show__element__content__text button {
    all: unset;
    cursor: pointer;
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  .accueil__post__show__element__content__comment {
    border: 1px solid white;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #eaeaea;
  }
  .accueil__post__show__element__content__comment h3 {
    margin-top: 0;
  }
  .accueil__post__show__element__content__comment__add {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 0.5rem;
  }
  .accueil__post__show__element__content__comment__add label {
    margin-bottom: 1rem;
  }
  .accueil__post__show__element__content__comment__add i {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: #152545;
  }
  .accueil__post__show__element__content__comment__add span {
    display: flex;
    align-items: center;
  }
  .accueil__post__show__element__content__comment textarea {
    outline: none;
    resize: none;
    width: 70%;
    height: 1.5rem;
  }
}

/*# sourceMappingURL=style.css.map */

</style>

<style scoped>
* {
  font-family: "Lato", sans-serif;
}

.fa-share:hover {
  color: blue;
}
.modifyTitle {
  margin: 2rem 0 2rem 0;
  width: 50%;
  min-width: 10rem;
  font-weight: bold;
  margin-left: 2rem;
  border-radius: 0.2rem;
  background-color: #e0e2e5;
  border: none;
  height: 1.5rem;
}
.modifyContent {
  width: 35rem;
  margin: 1rem 0 0 0;
  height: 5rem;
  outline: none;
  resize: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e0e2e5;
  border: none;
}

/* Partie profil */
/*  */
@media screen and (min-width: 1410px) {
  .profil {
    display: flex;
    position: absolute;
    height: fit-content;
    border: 1px solid black;
    background-color: #e0e2e5;
    border-radius: 1rem;
    width: fit-content;
    margin-top: 10rem;
    width: 60%;
    margin-left: 20%;
    padding: 2rem;
  }
  .profil__image {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-right: 2rem;
  }
  .profil__image i {
    margin-top: 2rem;
    font-size: 2rem;
  }
  .profil__image i:hover {
    color: #0e47b9;
    cursor: pointer;
  }
  .profil__image img {
    width: 150px;
    height: 150px;
    border-radius: 2rem;
    border: 2px solid white;
    object-fit: cover;
    margin-bottom: 2rem;
  }
  .profil__image .fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .profil__image .fields label {
    font-size: 120%;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
  .profil__image .fields input {
    border: 2px dashed black;
    padding: 0.5rem;
    margin-top: 1rem;
    font-weight: bold;
    color: blue;
  }
  .profil__image .fields #putPicture {
    cursor: pointer;
    border: 2px solid black;
    background-color: #152545;
    border-radius: 0.5rem;
    color: white;
    padding: 0.5rem 0 0.5rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__image .fields #putPicture:hover {
    border-color: white;
    background-color: #d0575f;
  }
  .profil__infoUser {
    border: 2px solid #d0575f;
    flex: 1;
    border-radius: 1rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-right: 2rem;
  }
  .profil__infoUser .email {
    margin-top: 2rem;
  }
  .profil__infoUser .email h2 {
    color: #d0575f;
    margin: 0.5rem 0 0.5rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .email label {
    font-size: 120%;
  }
  .profil__infoUser .email input {
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 100%;
  }
  .profil__infoUser .email i {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  .profil__infoUser .email i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser .password {
    margin-top: 3rem;
  }
  .profil__infoUser .password h2 {
    color: #d0575f;
    margin: 0.5rem 0 0.5rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .password label {
    font-size: 120%;
  }
  .profil__infoUser .password input {
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 100%;
  }
  .profil__infoUser .password i {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  .profil__infoUser .password i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser span {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
  .profil__infoUser span button {
    all: unset;
    margin: 1em 0 2rem 0;
    width: fit-content;
    cursor: pointer;
    border: 2px solid white;
    padding: 1rem;
    font-weight: bold;
    border-radius: 1rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__infoUser span button:hover {
    background-color: #152545;
    color: white;
  }
}
@media screen and (max-width: 1410px) {
  .profil {
    display: flex;
    position: absolute;
    height: fit-content;
    border: 1px solid black;
    background-color: #e0e2e5;
    border-radius: 1rem;
    width: fit-content;
    flex-direction: column;
    margin-top: 10rem;
    width: 60%;
    margin-left: 20%;
    padding: 2rem;
  }
  .profil__image {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: space-around;
  }
  .profil__image i {
    align-self: flex-start;
    margin-top: 2rem;
    font-size: 2rem;
  }
  .profil__image i:hover {
    color: #0e47b9;
    cursor: pointer;
  }
  .profil__image img {
    width: 120px;
    height: 120px;
    border-radius: 2rem;
    border: 2px solid white;
    object-fit: cover;
  }
  .profil__image .fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profil__image .fields label {
    font-size: 120%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
  .profil__image .fields input {
    border: 2px dashed black;
    padding: 0.5rem;
    display: flex;
    overflow: hidden;
    height: 20px;
    width: 111px;
    margin-top: 1rem;
    font-weight: bold;
    color: blue;
  }
  .profil__image .fields #putPicture {
    cursor: pointer;
    border: 2px solid black;
    background-color: #152545;
    border-radius: 0.5rem;
    color: white;
    padding: 0.5rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__image .fields #putPicture:hover {
    border-color: white;
    background-color: #d0575f;
  }
  .profil__infoUser {
    border: 2px solid #d0575f;
    flex: 1;
    border-radius: 1rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .profil__infoUser .email {
    margin-top: 2rem;
  }
  .profil__infoUser .email h2 {
    color: #d0575f;
    margin: 0.5rem 0 0.5rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .email label {
    font-size: 100%;
  }
  .profil__infoUser .email input {
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 90%;
  }
  .profil__infoUser .email i {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  .profil__infoUser .email i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser .password {
    margin-top: 3rem;
  }
  .profil__infoUser .password h2 {
    color: #d0575f;
    margin: 0.5rem 0 0.5rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .password label {
    font-size: 100%;
  }
  .profil__infoUser .password input {
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 90%;
  }
  .profil__infoUser .password i {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  .profil__infoUser .password i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser span {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .profil__infoUser span button {
    all: unset;
    margin: 1rem 0 2rem 0;
    width: fit-content;
    cursor: pointer;
    border: 2px solid white;
    padding: 1rem;
    font-weight: bold;
    border-radius: 1rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__infoUser span button:hover {
    background-color: #152545;
    color: white;
  }
}
@media screen and (max-width: 820px) {
  .profil {
    display: flex;
    position: absolute;
    height: fit-content;
    border: 1px solid black;
    background-color: #e0e2e5;
    border-radius: 1rem;
    width: fit-content;
    flex-direction: column;
    margin-top: 10rem;
    width: 60%;
    margin-left: 20%;
    padding: 2rem;
  }
  .profil__image {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: space-around;
  }
  .profil__image i {
    align-self: flex-start;
    margin-top: 2rem;
    font-size: 2rem;
  }
  .profil__image i:hover {
    color: #0e47b9;
    cursor: pointer;
  }
  .profil__image img {
    width: 90px;
    height: 90px;
    border-radius: 2rem;
    border: 2px solid white;
    object-fit: cover;
  }
  .profil__image .fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profil__image .fields label {
    font-size: 120%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
  .profil__image .fields input {
    border: 2px dashed black;
    padding: 0.5rem;
    display: flex;
    overflow: hidden;
    height: 20px;
    width: 111px;
    margin-top: 1rem;
    font-weight: bold;
    color: blue;
  }
  .profil__image .fields #putPicture {
    cursor: pointer;
    border: 2px solid black;
    background-color: #152545;
    border-radius: 0.5rem;
    color: white;
    padding: 0.5rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__image .fields #putPicture:hover {
    border-color: white;
    background-color: #d0575f;
  }
  .profil__infoUser {
    border: 2px solid #d0575f;
    flex: 1;
    border-radius: 1rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .profil__infoUser .email {
    margin-top: 2rem;
  }
  .profil__infoUser .email h2 {
    color: #d0575f;
    margin: 0.5rem 0 0.5rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .email label {
    font-size: 120%;
  }
  .profil__infoUser .email input {
    border: none;
    outline: none;
    padding: 0.5rem;
    min-width: 210px;
    font-size: 90%;
  }
  .profil__infoUser .email i {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  .profil__infoUser .email i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser .password {
    margin-top: 3rem;
  }
  .profil__infoUser .password h2 {
    color: #d0575f;
    margin: 0.5rem 0 0.5rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .password label {
    font-size: 120%;
  }
  .profil__infoUser .password input {
    border: none;
    outline: none;
    padding: 0.5rem;
    min-width: 210px;
    font-size: 90%;
  }
  .profil__infoUser .password i {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  .profil__infoUser .password i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser span {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .profil__infoUser span button {
    all: unset;
    margin: 1rem 0 2rem 0;
    width: fit-content;
    cursor: pointer;
    border: 2px solid white;
    padding: 1rem;
    font-weight: bold;
    border-radius: 1rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__infoUser span button:hover {
    background-color: #152545;
    color: white;
  }
}
@media screen and (max-width: 580px) {
  .profil {
    display: flex;
    position: absolute;
    height: fit-content;
    align-items: center;
    border: 1px solid black;
    background-color: #e0e2e5;
    border-radius: 1rem;
    width: fit-content;
    flex-direction: column;
    margin-top: 10rem;
    width: 80%;
    margin-left: 7.5%;
    padding: 1rem;
  }
  .profil__image {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: space-around;
  }
  .profil__image i {
    align-self: flex-start;
    margin-top: 2rem;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  .profil__image i:hover {
    color: #0e47b9;
    cursor: pointer;
  }
  .profil__image img {
    width: 70px;
    height: 70px;
    border-radius: 1.5rem;
    border: 2px solid white;
    object-fit: cover;
    margin-right: 1rem;
  }
  .profil__image .fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profil__image .fields label {
    font-size: 100%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
  .profil__image .fields input {
    border: 2px dashed black;
    padding: 0.5rem;
    display: flex;
    overflow: hidden;
    height: 20px;
    width: 111px;
    margin-top: 1rem;
    font-weight: bold;
    color: blue;
  }
  .profil__image .fields #putPicture {
    cursor: pointer;
    border: 2px solid black;
    background-color: #152545;
    border-radius: 0.5rem;
    color: white;
    padding: 0rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__image .fields #putPicture:hover {
    border-color: white;
    background-color: #d0575f;
  }
  .profil__infoUser {
    border: 2px solid #d0575f;
    flex: 1;
    width: 80%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .profil__infoUser .email {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  .profil__infoUser .email h2 {
    font-size: 110%;
    color: #d0575f;
    margin: 0.5rem 0 1rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .email label {
    font-size: 100%;
    margin-bottom: 0.5rem;
  }
  .profil__infoUser .email input {
    margin-bottom: 1rem;
    border: none;
    outline: none;
    font-size: 70%;
  }
  .profil__infoUser .email i {
    font-size: 1.5rem;
    margin-left: 0.2rem;
  }
  .profil__infoUser .email i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser .password {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  .profil__infoUser .password h2 {
    font-size: 110%;
    color: #d0575f;
    margin: 0.5rem 0 1rem 0;
    text-decoration: overline;
    text-decoration-color: #152545;
  }
  .profil__infoUser .password label {
    font-size: 100%;
    margin-bottom: 0.5rem;
  }
  .profil__infoUser .password input {
    margin-bottom: 1rem;
    border: none;
    outline: none;
    font-size: 70%;
  }
  .profil__infoUser .password i {
    font-size: 1.5rem;
    margin-left: 0.2rem;
  }
  .profil__infoUser .password i:hover {
    color: red;
    cursor: pointer;
  }
  .profil__infoUser span {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .profil__infoUser span button {
    all: unset;
    margin: 1rem 0 2rem 0;
    width: fit-content;
    cursor: pointer;
    border: 2px solid white;
    padding: 1rem;
    font-weight: bold;
    border-radius: 1rem;
    transition: background-color 0.2s ease-in-out;
  }
  .profil__infoUser span button:hover {
    background-color: #152545;
    color: white;
  }
}
/*# sourceMappingURL=style.css.map */



.accueil__post__show__element__content__comment__add textarea{
 resize: none;
 margin-top: 1rem;
 outline: none;
 border: none;
 border-radius: 0.2rem;
}

.new__comment{
  border:1px solid white ;
  margin: 1rem 0 1rem 0;
  padding: 0 1rem 0 1rem;
}
.new__comment h4 {
  margin: 1rem 0 0.5rem 0;
}


/* Création de post : */
/*  */
@media screen and (min-width: 850px){
.createPost {
  background-color: #cb656b;
  border-radius: 0.5rem;
  position: absolute;
  visibility: hidden;
  flex-direction: column;
  width: 65%;
  margin: 10rem 0 0 17.5%;
}
.createPost__head {
  display: flex;
  align-items: center;
}
.createPost__head__title {
  display: flex;
  flex: 1;
  align-items: center;
}
.createPost__head label {
  font-weight: bold;
  font-size: 120%;
}
.createPost__head input {
  width: 80%;
  min-width: 10rem;
  margin-left: 1.5rem;
  border-radius: 0.2rem;
  background-color: #e0e2e5;
  border: none;
  height: 1.5rem;
  outline: none;
}
.createPost__head i {
  border: 2px solid black;
  margin-bottom: 5.5rem;
  margin-right: 0.5rem;
  color: red;
  padding: 0 0.2rem 0 0.2rem;
}
.createPost__head i:hover {
  background-color: rgba(255, 255, 255, 0.604);
  cursor: pointer;
}
.createPost__head img {
  max-width: 100px;
  max-height: 100px;
  min-width: 70px;
  min-height: 70px;
  width: 15%;
  border-radius: 1.5rem;
  margin: 1rem;
  border: 2px solid white;
  object-fit: cover;
}
.createPost__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1rem 0 1rem 0;
}
.createPost__content label {
  font-weight: bold;
  font-size: 120%;
}
.createPost__content textarea {
  margin-top: 2rem;
  width: 70%;
  height: 10rem;
  outline: none;
  resize: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e0e2e5;
  border: none;
}
.createPost__files {
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
}
.createPost__files label {
  font-weight: bold;
  font-size: 120%;
}
.createPost__files input {
  border: 2px dashed black;
  padding: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  color: blue;
}

.button {
  display: flex;
  justify-content: center;
}
.button button {
  all: unset;
  border: 2px solid #152545;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
}
.button button:hover {
  cursor: pointer;
  background-color: #152545;
  color: white;
  border-color: white;
}
}
@media screen and (max-width: 850px) {
  .createPost {
  background-color: #cb656b;
    border-radius: 0.5rem;
    position: absolute;
    flex-direction: column;
    width: 80%;
    visibility: hidden;
    margin: 10rem 0 0 10%;
  }
  .createPost__head {
    display: flex;
    margin-bottom: 1rem;
    padding-top: 0.5rem;
    align-items: center;
  }
  .createPost__head__title {
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    flex: 1;
    align-items: center;
  }
  .createPost__head label {
    font-weight: bold;
    font-size: 120%;
    margin-bottom: 0.5rem;
  }
  .createPost__head input {
    width: 80%;
    margin: 0;
    border-radius: 0.2rem;
    background-color: #e0e2e5;
    border: none;
    height: 1.5rem;
    outline: none;
  }
  .createPost__head i {
    border: 2px solid black;
    margin-bottom: 2.5rem;
    margin-right: 0.5rem;
    color: red;
    padding: 0 0.2rem 0 0.2rem;
  }
  .createPost__head i:hover {
    background-color: rgba(255, 255, 255, 0.604);
    cursor: pointer;
  }
  .createPost__head img {
    max-width: 70px;
    max-height: 70px;
    min-width: 55px;
    min-height: 55px;
    width: 10%;
    margin: 0 0 0 0.5rem;
    border-radius: 1rem;
    border: 2px solid white;
    object-fit: cover;
  }
  .createPost__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 1rem 0 1rem 0;
  }
  .createPost__content label {
    font-weight: bold;
    font-size: 120%;
  }
  .createPost__content textarea {
    margin-top: 2rem;
    width: 70%;
    height: 10rem;
    outline: none;
    resize: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #e0e2e5;
    border: none;
  }
  .createPost__files {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
  .createPost__files label {
    font-weight: bold;
    font-size: 120%;
  }
  .createPost__files input {
    border: 2px dashed black;
    padding: 0.5rem;
    width: 80%;
    font-size: 70%;
    margin-top: 1rem;
    color: blue;
    font-weight: bold;
  }

  .button {
    display: flex;
    justify-content: center;
  }
  .button button {
    all: unset;
    border: 2px solid #152545;
    margin-bottom: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-weight: bold;
  }
  .button button:hover {
    cursor: pointer;
    background-color: #152545;
    color: white;
    border-color: white;
  }
}


/* PARTIE ACCUEIL !!! */
/*  */

/* .accueil__post__show__element img{
  border: 3px solid red;
} */

@media screen and (min-width: 768px) {
  
header {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid black;
  padding-bottom: 1.5rem;
}
header img {
  margin-top: 1%;
  object-fit: cover;
  height: 5rem;
}
.accueil {
  margin: 3% 0 0 0;
  display: flex;
  justify-content: flex-end;
}
.accueil__post {
  max-width: 800px;
  flex: 1;
  margin-left: 15%;
  margin-right: 15%;
}
.accueil__post__add {
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  color: white;
  background-color: #4c5c6d;
  cursor: pointer;
}
.accueil__post__add img {
  object-fit: cover;
  width: 80px;
  height: 80px;
  border-radius: 2rem;
  padding: 1rem;
  justify-self: flex-start;
  margin-right: 5%;
}
.accueil__post__add form {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-around;
  margin: 0 5% 0 0;
}
.accueil__post__add form i {
  font-size: 150%;
  color: white;
}
.accueil__post__add form input {
  width: 40%;
  height: 22px;
}
.accueil__post__add form label {
  font-size: 130%;
}
.accueil__profil {
  border-radius: 0.5rem;
  margin-right: 2.5%;
  width: 175px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d0575f;
  padding: 0 0.5rem 0 0.5rem;
  cursor: pointer;
}
.accueil__profil #accueil_profil__active {
  display: none;
}
.accueil__profil:hover #accueil_profil__active {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 100%;
}
.accueil__profil:hover #accueil_profil__active h2:hover {
  color: #152545;
}
.accueil__profil h1 {
  font-weight: bold;
  font-size: 120%;
  color: #152545;
}
}
@media screen and (max-width: 768px) {
  header {
    display: flex;
    justify-content: center; 
    border-bottom: 2px solid black;
    padding-bottom: 1.5rem;
  }
  header img {
    margin-top: 1%;
    object-fit: cover;
    width: fit-content;
    height: 3rem;
  }
  .accueil {
    margin: 3% 0 0 0;
    /* border: 1px solid black; */
    display: flex;
    justify-content: flex-end;
  }
  .accueil__post {
    flex: 1;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  .accueil__post__add {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    color: white;
    background-color: #4c5c6d;
    cursor: pointer;
  }
  .accueil__post__add img {
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 1rem;
    padding: 0.5rem;
    justify-self: flex-start;
    margin-right: 1%;
  }
  .accueil__post__add form {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
    margin: 0 2% 0 0;
  }
  .accueil__post__add form button {
    all: unset;
    font-size: 100%;
    color: white;
  }
  .accueil__post__add form input {
    width: 40%;
    height: 15px;
  }
  .accueil__post__add form label {
    font-size: 80%;
  }
  .accueil__profil {
    border-radius: 0.5rem;
    margin-right: 1.5%;
    width: 60px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d0575f;
  padding: 0 0.5rem 0 0.5rem;
    cursor: pointer;
  }
  .accueil__profil #accueil_profil__active {
    display: none;
  }
  .accueil__profil:hover #accueil_profil__active {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 60%;
  }
  .accueil__profil:hover #accueil_profil__active h2:hover {
    color: #152545;
  }
  .accueil__profil h1 {
    font-weight: bold;
    font-size: 80%;
    color: #152545;
  }
}



/*# sourceMappingURL=style.css.map */

</style>

<script>

// Besoin de faire un truc si TOKEN est mauvais (ne pourras pas Get les posts et affichage d'un bouton pour aller a la page de connexion)
// Si pas de Token renvoi vers la page de connexion
let Token = localStorage.getItem('Token')
if (!Token) {
setTimeout(function(){location.href="/"} , 0);
}

// Récupération des données de l'utilisateur 
let id = localStorage.getItem('ID')
fetch(`http://localhost:5000/api/user/${id}`, {
   headers: {
      Authorization : `Bearer ${JSON.parse(Token)}` 
    },
})
.then((res) => res.json())
.then((res) => {
  // console.log(res.data)

  // Si le token ne correspond pas à l'id déconnexion + retour a la page d'accueil
  if (res.data == "Problème d'authentification veuillez vous reconnecter."){
    alert("Problème d'authentification veuillez vous reconnecter.")
    localStorage.clear()
    location.reload()
  }

  let username = document.getElementById('username')
  username.innerText = res.data.prenom + "   " + res.data.nom

  let profilEmail = document.getElementById('profilEmail')
  profilEmail.innerText = `${res.data.email}`


  if (res.data.picturePath === null){
    // Affichage d'une erreur pas de photo
  }

})



import axios from 'axios';
export default {
    mounted(){
        this.onLoad();
    },
    name: 'accueil',
    props: '',
    data(){
      return { 
        file:"",
        show: false,
        message:"",
      }
    },
    computed:{
    },
    components: {
    },
    methods: {
        onLoad(){

        // Affichage de l'image de l'utilisateur : 
        fetch(`http://localhost:5000/api/user/${id}`, {
          headers: {
              Authorization : `Bearer ${JSON.parse(Token)}` 
            },
        })
        .then((res) => res.json())
        .then((res) => {
          let profilImage = document.getElementsByClassName("imageProfil")
          let path = "http://localhost:5000/uploads/" + res.data.picturePath

          for(let profil of profilImage){
            profil.src=`${path}`
          }
        })



          let token = localStorage.getItem('Token');
          // On récupère tout les posts au passage si le token est mauvais on indique une erreur et demande une reconnexion
          fetch("http://localhost:5000/api/post", {
            headers: {
                Authorization : `Bearer ${JSON.parse(Token)}` 
            },
          })
          .then((res) => res.json())
          .then((res) => {

            fetch("http://localhost:5000/api/allUser", {})
            .then((res) => res.json())
            .then((allUser) => {
              // console.log(allUser.data)

            // Affichage d'une plus belle erreur
            if (res.data.message === "invalid token"){ console.log("Erreur d'authentification")}
            else {
              let focus = document.getElementById("showPost")


          // Affichage des post 
            // 
            // 
            let nbOriginal = 0
            let nbShare = 0
            if (res.data.length === 0 ){
              console.log("Pas de post")
                focus.innerHTML = `<h1 id="noPost">Aucun post pour l'instant.</h1>`
            }
              for (let data of res.data){
                  let userId = localStorage.getItem('ID');
                  let id = data.id

                  // Si c'est un repost
                  if (data.reposted === true){
                    let  userWhoRepost = allUser.data.find(el => el.id == data.userId)
                    let userOfPost = allUser.data.find(el => el.id == data.initialUser)
                    if(userWhoRepost === undefined){
                      userWhoRepost = { picture: "default.png", prenom: "L'utilisateur qui à reposter à supprimer son compte.", nom : "" }
                    }
                    if(userOfPost === undefined){
                      userOfPost = { picture: "default.png", prenom: "L'utilisateur à la base du post à supprimer son compte.", nom : "" }
                    }
                    nbShare += 1
                    // console.log(data)
                    // console.log(userWhoRepost)
                    // console.log(userOfPost)
                    // console.log(data.picturePath)

                    // Si il n'y a pas d'image :
                    if(data.picturePath === null){

                      focus.innerHTML += 
                      `<div class="accueil__post__show">
                        <div class="accueil__post__show__element"> 
                            <img src="http://localhost:5000/uploads/${userWhoRepost.picture}" alt="">
                            <div class="accueil__post__show__element__content">
                                <div class="accueil__post__show__element__content__text">
                                    <h1> ${userWhoRepost.prenom}  ${userWhoRepost.nom} </h4>
                                    <h2 class="actual__title">${data.title}</h1>
                                    <h3> <em>Repost ! (${userOfPost.prenom}  ${userOfPost.nom})</em> </h3>

                                    <div class="modify__title">
                                      <label for="modifTitle${nbShare}"> Modifier le titre : </label>
                                      <input type="text" id="modifTitle${nbShare}" class="modifyTitle" value="${data.title}">
                                    </div>

                                    <p class="actual__content">${data.content}</p>

                                    <div class="modify__content">
                                      <label for="modifContent${nbShare}"> Modifier votre post :</label>
                                      <textarea rows="10" cols="90" id="modifContent${nbShare}" class="modifyContent" >${data.content}</textarea>
                                    </div>

                                    <span class="options"> 
                                      <button class="share"> <i class="fas fa-share"></i> </button> 

                                      <button class="modify"> <i class="fas fa-pen-alt"></i> </button>  
                                      <button class="delete"> <i class="fas fa-trash"></i> </button> 

                                      
                                      <button class='cancelModif'> <i class="fas fa-times"></i> </button>
                                      <button class='acceptModif'> <i class="fas fa-check"></i> </button>
                                    </span>
                                </div>
                                <div class="accueil__post__show__element__content__comment">
                                    <h3>Commentaires </h3>
                                    <div class="accueil__post__show__element__content__comment__add">
                                      <label for="addComment${nbShare}">Écrire un commentaire :</label>
                                      <span>
                                        <textarea rows="3" cols="90" id="addComment${nbShare}" name="addComment${nbShare}" class="newCommentContent"></textarea>
                                        <i class="fas fa-caret-square-right" id="${id}"></i>
                                      </span>
                                    </div>
                                    <div class="accueil__post__show__element__content__comment__nb" id="comment${id}"></div>
                                </div>
                            </div>
                        </div>
                      </div>`;
                    }
                    // S'il y a une image : 
                    else {
                      focus.innerHTML += 
                      `<div class="accueil__post__show">
                        <div class="accueil__post__show__element"> 
                            <img src="http://localhost:5000/uploads/${userWhoRepost.picture}" alt="">
                            <div class="accueil__post__show__element__content">
                                <div class="accueil__post__show__element__content__text">
                                    <h1> ${userWhoRepost.prenom}  ${userWhoRepost.nom} </h4>
                                    <h2 class="actual__title">${data.title}</h1>
                                    <h3> <em>Repost ! (${userOfPost.prenom}  ${userOfPost.nom})</em> </h3>

                                    <div class="modify__title">
                                      <label for="modifTitleimg${nbShare}"> Modifier le titre : </label>
                                      <input type="text" id="modifTitleimg${nbShare}" class="modifyTitle" value="${data.title}">
                                    </div>

                                    <img src="http://localhost:5000/uploads/${data.picturePath}" alt="">
                                    <p class="actual__content">${data.content}</p>

                                    <div class="modify__content">
                                      <label for="modifContentimg${nbShare}"> Modifier votre post :</label>
                                      <textarea rows="10" cols="90" id="modifContentimg${nbShare}" class="modifyContent" >${data.content}</textarea>
                                    </div>

                                    <span class="options"> 
                                      <button class="share"> <i class="fas fa-share"></i> </button> 

                                      <button class="modify"> <i class="fas fa-pen-alt"></i> </button>  
                                      <button class="delete"> <i class="fas fa-trash"></i> </button> 

                                      
                                      <button class='cancelModif'> <i class="fas fa-times"></i> </button>
                                      <button class='acceptModif'> <i class="fas fa-check"></i> </button>
                                    </span>
                                </div>
                                <div class="accueil__post__show__element__content__comment">
                                    <h3>Commentaires </h3>
                                    <div class="accueil__post__show__element__content__comment__add">
                                      <label for="addCommentimg${nbShare}">Écrire un commentaire :</label>
                                      <span>
                                        <textarea rows="3" cols="90" id="addCommentimg${nbShare}" name="addComment${nbShare}" class="newCommentContent"></textarea>
                                        <i class="fas fa-caret-square-right" id="${id}"></i>
                                      </span>
                                    </div>
                                    <div class="accueil__post__show__element__content__comment__nb" id="comment${id}"></div>
                                </div>
                            </div>
                        </div>
                      </div>`;
                    }
                  
                  // Si c'est le post original
                  }else {
                    // console.log(data)
                    let userOfPost = allUser.data.find(el => el.id == data.userId)
                    // console.log(userOfPost)
                    if(userOfPost === undefined){
                      userOfPost = { picture: "default.png", prenom: "L'utilisateur à supprimer son compte.", nom : "" }
                    }
                    nbOriginal += 1
                    
                    if(data.picturePath === null){
                      focus.innerHTML += 
                      `<div class="accueil__post__show">
                        <div class="accueil__post__show__element"> 
                            <img src="http://localhost:5000/uploads/${userOfPost.picture}" alt="">
                            <div class="accueil__post__show__element__content">
                                <div class="accueil__post__show__element__content__text">
                                    <h1> ${userOfPost.prenom}  ${userOfPost.nom} </h4>
                                    <h2 class="actual__title">${data.title}</h1>

                                    <div class="modify__title">
                                      <label for="modifTitleOriginal${nbOriginal}"> Modifier le titre : </label>
                                      <input type="text" id="modifTitleOriginal${nbOriginal}" class="modifyTitle" value="${data.title}">
                                    </div>

                                    <p class="actual__content">${data.content}</p>

                                    <div class="modify__content">
                                      <label for="modifContentOriginal${nbOriginal}"> Modifier votre post :</label>
                                      <textarea rows="10" cols="90" id="modifContentOriginal${nbOriginal}" class="modifyContent" >${data.content}</textarea>
                                    </div>

                                    <span class="options"> 
                                      <button class="share"> <i class="fas fa-share"></i> </button> 

                                      <button class="modify"> <i class="fas fa-pen-alt"></i> </button>  
                                      <button class="delete"> <i class="fas fa-trash"></i> </button> 

                                      
                                      <button class='cancelModif'> <i class="fas fa-times"></i> </button>
                                      <button class='acceptModif'> <i class="fas fa-check"></i> </button>
                                    </span>
                                </div>
                                <div class="accueil__post__show__element__content__comment">
                                    <h3>Commentaires </h3>
                                    <div class="accueil__post__show__element__content__comment__add">
                                      <label for="addCommentOriginal${nbOriginal}">Écrire un commentaire :</label>
                                      <span>
                                        <textarea rows="3" cols="90" id="addCommentOriginal${nbOriginal}" class="newCommentContent" name="commentaires"></textarea>
                                        <i class="fas fa-caret-square-right" id="${id}"></i>
                                      </span>
                                    </div>
                                    <div class="accueil__post__show__element__content__comment__nb" id="comment${id}"></div>
                                </div>
                            </div>
                        </div>
                      </div>`;
                    }
                    else {
                      focus.innerHTML += 
                      `<div class="accueil__post__show">
                        <div class="accueil__post__show__element"> 
                            <img src="http://localhost:5000/uploads/${userOfPost.picture}" alt="">
                            <div class="accueil__post__show__element__content">
                                <div class="accueil__post__show__element__content__text">
                                    <h1> ${userOfPost.prenom}  ${userOfPost.nom} </h4>
                                    <h2 class="actual__title">${data.title}</h1>

                                    <div class="modify__title">
                                      <label for="modifTitleOriginalImg${nbOriginal}"> Modifier le titre : </label>
                                      <input type="text" id="modifTitleOriginalImg${nbOriginal}" class="modifyTitle" value="${data.title}">
                                    </div>

                                    <img class="postImages" src="http://localhost:5000/uploads/${data.picturePath}" alt="">
                                    <p class="actual__content">${data.content}</p>

                                    <div class="modify__content">
                                      <label for="modifContentOriginalImg${nbOriginal}"> Modifier votre post :</label>
                                      <textarea rows="10" cols="90" id="modifContentOriginalImg${nbOriginal}" class="modifyContent" >${data.content}</textarea>
                                    </div>

                                    <span class="options"> 
                                      <button class="share"> <i class="fas fa-share"></i> </button> 

                                      <button class="modify"> <i class="fas fa-pen-alt"></i> </button>  
                                      <button class="delete"> <i class="fas fa-trash"></i> </button> 

                                      
                                      <button class='cancelModif'> <i class="fas fa-times"></i> </button>
                                      <button class='acceptModif'> <i class="fas fa-check"></i> </button>
                                    </span>
                                </div>
                                <div class="accueil__post__show__element__content__comment">
                                    <h3>Commentaires </h3>
                                    <div class="accueil__post__show__element__content__comment__add">
                                      <label for="addCommentOriginalImg${nbOriginal}">Écrire un commentaire :</label>
                                      <span>
                                        <textarea rows="3" cols="90" id="addCommentOriginalImg${nbOriginal}" class="newCommentContent" name="commentaires"></textarea>
                                        <i class="fas fa-caret-square-right" id="${id}"></i>
                                      </span>
                                    </div>
                                    <div class="accueil__post__show__element__content__comment__nb" id="comment${id}"></div>
                                </div>
                            </div>
                        </div>
                      </div>`;
                    }
                    
                  }

              } 
            // 
            // 
          // FIN AFFICHAGE DES POSTS

          // Partie profil
            // 
            let profil = document.getElementById("profil")
            let profilActive = document.getElementById("accueil_profil__active")
            let profilOn = document.getElementsByClassName("profil")
            profilOn[0].style.display = "none";

            profilActive.style.display = "none"
            profil.onmouseover = () => {
              profilActive.style.display = "block"
            }
            profil.onmouseleave = () => {
              profilActive.style.display = "none"
            }

            // 
          // Fin partie profil




          // Affichage des commentaires avec le nom des utilisateurs
            // 
            // 

            // On charge les noms de tout le monde 
            fetch(`http://localhost:5000/api/allUser`, {

            })
            .then((res)=>res.json())
            .then((users) => {
              // console.log(users)

              // On charge les commentaires
              fetch(`http://localhost:5000/api/comment`, {
                  headers: {
                    Authorization : `Bearer ${JSON.parse(Token)}` 
                  },
                })
                .then((comments) => comments.json())
                .then((comments) => {
                  // console.log(comments.data)

                  // Dans les posts :
                let nb = 0
                let notAllowed = [{nb : 0}]
                let allowed = [{nb : 0}]
                let Id= localStorage.getItem("ID")
                 fetch(`http://localhost:5000/api/user/${Id}`, {
                            headers: {
                                Authorization : `Bearer ${JSON.parse(Token)}` 
                              },
                          })
                          .then((res) => res.json())
                          .then((user) => {

                            for (let data of res.data){
                            // console.log(data)
                            let commentAdd = document.getElementById(`comment${data.id}`)

                            // Dans les commentaires : 
                            for (let comment of comments.data){
                              //  console.log(comment)
                                
                                if (comment.postId === data.id){
                                  // console.log(comment)
                                  // console.log(users.data)
                                  let commentUser = users.data.find(el => el.id == comment.userId)
                                  // console.log(commentUser)

                                  if(commentUser === undefined){
                                    commentUser = { prenom:"L'utilisateur à supprimer son compte.", nom:"" }
                                  }
                                  
                                  
                                    // console.log(user.data)
                                    // console.log(comment)
                                    nb += 1

                                    if (user.data.idAdmin === true) {
                                        commentAdd.innerHTML += 
                                      `<div class='new__comment'>
                                        <h4> ${commentUser.prenom}   ${commentUser.nom} </h4>
                                        <p>${comment.content}</p>
                                        <button  class="deleteComment"> <i class="fas fa-trash"></i> </button> 
                                      </div>`
                                      allowed.push({nb})
                                    }  
                                    else {
                                      // Affichage du commentaire avec possiblité de supprimé
                                      if(Id == comment.userId){
                                        commentAdd.innerHTML += 
                                        `<div class='new__comment'>
                                            <h4> ${commentUser.prenom}   ${commentUser.nom} </h4>
                                            <p>${comment.content}</p>
                                            <button  class="deleteComment"> <i class="fas fa-trash"></i> </button> 
                                          </div>`
                                          allowed.push({nb})
                                      }
                                      // Affichage du commentaire sans possibilité de supprimé
                                      else {
                                        commentAdd.innerHTML += 
                                      `<div class='new__comment'>
                                          <h4> ${commentUser.prenom}   ${commentUser.nom} </h4>
                                          <p>${comment.content}</p> 
                                          <button  class="deleteComment"> <i class="fas fa-trash"></i> </button> 
                                        </div>`
                                        notAllowed.push({nb})
                                      }
                                    }
                                              
                                }
                              } 
                          } 
                          // console.log(notAllowed)
                          for (let i in notAllowed){
                            
                            if(notAllowed[i].nb === 0){
                            }
                            else {
                              // console.log(notAllowed[i])
                              let test = document.getElementsByClassName("deleteComment")                              
                              test[notAllowed[i].nb -1].style.display = "none"

                              // test[notAllowed[i].nb -1].onclick = () => {
                              //   console.log("C'est bon")
                              // }
                            }
                          }
                          for (let i in allowed){
                            if(allowed[i].nb === 0){
                            }
                            else {
                              // console.log(allowed[i])

                              let test = document.getElementsByClassName("deleteComment")                              
                              test[allowed[i].nb -1].onclick = () => {
                                console.log(comments.data[allowed[i].nb-1])
                                let deletedComment = comments.data[allowed[i].nb-1]
                                console.log(deletedComment)

                                fetch(`http://localhost:5000/api/comments/${deletedComment.id}`, {
                                method: 'DELETE',
                                headers: {
                                    Authorization : `Bearer ${JSON.parse(Token)}` 
                                },
                                })
                                .then((res) => res.json())
                                .then((res) => {
                                  setTimeout("location.reload(true);",400)
                                })
                              }
                            }
                          }
                        })
                 
  

                  // for (let i in comments.data){
                  //   commentId[i].onclick = () => {
                  //     // console.log(comments.data[i].id)
                  //     fetch(`http://localhost:5000/api/comments/${comments.data[i].id}`, {
                  //       method: 'DELETE',
                  //       headers: {
                  //           Authorization : `Bearer ${JSON.parse(Token)}` 
                  //       },
                  //     })
                  //     .then((res) => res.json())
                  //     .then((res) => {
                  //       setTimeout("location.reload(true);",400)
                  //     })
                      
                  //   }
                  // }

                  // // Affichage de la possibilité de supprimé le commentaire
                
                  // for (let i in comments.data){
                  //   // console.log(comments.data[i])

                  //     fetch(`http://localhost:5000/api/user/${id}`, {
                  //       headers: {
                  //           Authorization : `Bearer ${JSON.parse(Token)}` 
                  //         },
                  //     })
                  //     .then((res) => res.json())
                  //     .then((user) => { 

                  //       // console.log(comments.data[i])
                  //       if (user.data.idAdmin === true) {
                  //         return
                  //       }                    
                  //       if (comments.data[i].userId == user.data.id){
                          
                  //       }
                  //       else {
                  //         commentId[i].style.display = "none" 
                  //       }
                  //     }) 
                  //   }
                    // Fin affichage suppression commentaires

                })
            })      
              // 
              //
            // FIN AFFICHAGE COMMENTAIRES 
          


          // Ajout de commentaire 
            // 
            // 
            let test = document.getElementsByClassName("newCommentContent")
            let btn = document.getElementsByClassName("fas fa-caret-square-right")
            
            for (let i=0; btn.length >i ;i++){
              btn[i].onclick = () => {
                let dataComment = { content : test[i].value }

                let id = localStorage.getItem('ID')
                fetch(`http://localhost:5000/api/user/${id}`, {
                  headers: {
                      Authorization : `Bearer ${JSON.parse(Token)}` 
                    },
                })
                .then((res) => res.json())
                .then((res) => {
                  dataComment = { userId:`${res.data.id}` , content : test[i].value } 
                  // Une fois l'utilisateur trouvé on envoi le commentaire
                   fetch(`http://localhost:5000/api/post/${btn[i].id}/comment`, {
                  method: 'POST',
                  body: JSON.stringify(dataComment),
                  headers: {
                      "Content-type": "application/json",
                      Authorization : `Bearer ${JSON.parse(token)}` 

                  },
                })
                setTimeout("location.reload(true);",100)
                setTimeout("location.reload(true);",200)
                })
              }
            }
            // 
            // 
          // FIN d'ajout de commentaires



          // Options
            // 
            // 
              let userId = localStorage.getItem('ID')
              let sharePost = document.getElementsByClassName('share')
              let deletePost = document.getElementsByClassName('delete')
              let modifyPost = document.getElementsByClassName('modify')
              let acceptModif = document.getElementsByClassName('acceptModif')
              let cancelModif = document.getElementsByClassName('cancelModif')
              let modifTile = document.getElementsByClassName('modify__title')
              let modifContent = document.getElementsByClassName('modify__content')
              let actualContent = document.getElementsByClassName('actual__content')
              let actualTitle = document.getElementsByClassName('actual__title')
              // console.log(res.data)
             for (let i in res.data){

              //  Si le post est un repost :
                if ( res.data[i].reposted === true) {
                  modifyPost[i].style.display = "none"
                  // console.log(res.data[i].userId)
                  if (res.data[i].userId == id){
                    sharePost[i].style.display = "none"
                  }
                  // RETURN ?
                }
                
                if (res.data[i].userId == id){
                  sharePost[i].style.display = "none"
                }

                cancelModif[i].style.visibility = "hidden"
                acceptModif[i].style.visibility = "hidden"
                modifTile[i].style.display = "none"
                modifContent[i].style.display = "none"


                  // Créer un RePost
                  // 
                  sharePost[i].onclick = () => {
                    // console.log(res.data[i])
                    let repost = res.data[i]
                    repost = { title : res.data[i].title, content: res.data[i].content, reposted : true, userId: id, initialUser: res.data[i].userId, picturePath: res.data[i].picturePath }
                    console.log(repost)
                    fetch("http://localhost:5000/api/posts", {
                      method: 'POST',
                      body : JSON.stringify(repost),
                      headers: {
                          "Content-type": "application/json",
                          Authorization : `Bearer ${JSON.parse(Token)}`
                      },
                    })
                    .then((res) => res.json())
                    .then((res) => {
                      console.log(res)
                    })

                    setTimeout("location.reload(true);",400)
                  }
                  // FIN REPOST
                  // 

                  // Affichage ou non de la modification
                    // 
                    modifyPost[i].onclick = ()=> {
                      // console.log(modifContent[i])

                      if(cancelModif[i].style.visibility == "visible"){
                        cancelModif[i].style.visibility = "hidden"
                        acceptModif[i].style.visibility = "hidden"
                        modifTile[i].style.display = "none"
                        modifContent[i].style.display = "none"
                        actualContent[i].style.display = "block"
                        actualTitle[i].style.display = "block"
                        return
                      }

                      if (cancelModif[i].style.visibility == "hidden"){
                        cancelModif[i].style.visibility = "visible"
                        acceptModif[i].style.visibility = "visible"
                        modifTile[i].style.display = "block"
                        modifContent[i].style.display = "block"
                        actualContent[i].style.display = "none"
                        actualTitle[i].style.display = "none"
                        return
                      }

                    }

                    // Création de la modification de posts
                    acceptModif[i].onclick = () => {
                      let newTitle = document.getElementsByClassName("modifyTitle")
                      let newContent = document.getElementsByClassName("modifyContent")

                      let userId = localStorage.getItem('ID')
                      let changePost = { "title": `${newTitle[i].value}`, "content": `${newContent[i].value}` }
                      console.log(changePost)
                      fetch(`http://localhost:5000/api/post/${res.data[i].id}`, {
                        method: 'PUT',
                        body: JSON.stringify(changePost),
                        headers: {
                          "Content-type": "application/json",
                          Authorization : `Bearer ${JSON.parse(token)}` 

                         },
                      })
                      .then((res) => res.json())
                      .then((res) => {
                        // console.log(res)
                        setTimeout("location.reload(true);",200)
                      })
                    }

                    cancelModif[i].onclick = () => {
                        cancelModif[i].style.visibility = "hidden"
                        acceptModif[i].style.visibility = "hidden"
                        modifTile[i].style.display = "none"
                        modifContent[i].style.display = "none"
                        actualContent[i].style.display = "block"
                        actualTitle[i].style.display = "block"
                    }
                    // 
                  // 



                // Si c'est le post de l'utilisateur on autorise la suppression et la modification
                  // 
                  
                    fetch(`http://localhost:5000/api/user/${id}`, {
                      headers: {
                          Authorization : `Bearer ${JSON.parse(Token)}` 
                        },
                    })
                    .then((res) => res.json())
                    .then((user) => { 


                      if (user.data.idAdmin === true) {
                        modifyPost[i].style.display = 'none'

                        deletePost[i].onclick = () => {
                          fetch(`http://localhost:5000/api/posts/${res.data[i].id}`, {
                            method: "DELETE",
                            headers: {
                                Authorization : `Bearer ${JSON.parse(Token)}` 
                            },
                          })
                          .then((res) => res.json())
                          .then((res) => {
                            console.log(res)
                            setTimeout("location.reload(true);",400)
                          })
                        }
                        return
                      }                    
                      if (res.data[i].userId == user.data.id){
                        deletePost[i].onclick = () => {
                          fetch(`http://localhost:5000/api/posts/${res.data[i].id}`, {
                            method: "DELETE",
                            headers: {
                                Authorization : `Bearer ${JSON.parse(Token)}` 
                            },
                          })
                          .then((res) => res.json())
                          .then((res) => {
                            console.log(res)
                            setTimeout("location.reload(true);",400)
                          })
                        }
                      }
                      else {
                        deletePost[i].style.display = "none" 
                        modifyPost[i].style.display = 'none'
                      }
                    })
              }
              // 
              // 
            // FIN Options



          // Affichage de la partie CREATE POST 
            // 
            // 
              let createPost = document.getElementsByClassName('accueil__post__add')
              let hide = document.getElementById('hide')
              let createPosts = document.getElementsByClassName('createPost')
              createPost[0].onclick = () => {
                hide.style.display ="initial";
                createPosts[0].style.visibility ="visible";
              }

              // Hide de la partie CREATE POST
              let leave = document.getElementsByClassName('fa-times')
              leave[0].onclick = () => {
                hide.style.display ="none";
                createPosts[0].style.visibility ="hidden";

              }
            }
            // 
            // 
          // FIN AFFICHAGE CREATE POST
              
            })

           
          })
        },
        profilUser(){
          let profil = document.getElementsByClassName("profil")
          let hide = document.getElementById('hide')

          hide.style.display ="initial";
          profil[0].style.display = 'flex'

          let putEmail = document.getElementById('emailValid')
          let putPassword = document.getElementById('passwordValid')

          let regTxt = /^[A-Za-z]+$/;
          let regPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40}/;
          let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          let emailCheck = false;
          let passwordCheck = false;

          newPassword.onkeyup = () =>{
            passwordCheck = regPassword.test(newPassword.value);

            if (passwordCheck === true){
              document.getElementById("passwordLabel")
              .innerHTML = `Mot de passe :  <i class="fas fa-check"></i>  `
            }else{
              document.getElementById("passwordLabel")
              .innerHTML = `Mot de passe :  <i class="fas fa-times"></i>  `

            }
          }
          newEmail.onkeyup = () =>{
            emailCheck = regEmail.test(newEmail.value);
            console.log(emailCheck)
            

            if (emailCheck === true){
              document.getElementById('emailLabel')
              .innerHTML = `Email :  <i class="fas fa-check"></i>  `
            }else{
              document.getElementById('emailLabel')
              .innerHTML = `Email :  <i class="fas fa-times"></i>  `
            }
          }

          putEmail.onclick = () => {
            console.log(newEmail.value)
            let newInfo = { email : newEmail.value }
            // Besoin de re-crypter le mdp

            if (regEmail.test(newEmail.value)){
              fetch(`http://localhost:5000/api/user/${id}` , { 
                method: "PUT",
                body : JSON.stringify(newInfo),
                headers: {
                  "Content-type": "application/json",
                  Authorization : `Bearer ${JSON.parse(Token)}`
                },
              })
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
                setTimeout("location.reload(true);",400)
            })
            }
            else {
              let email = document.getElementById('emailLabel')
              email.style.color = "red"
              email.style.fontWeight = "bold"
            }
          }
          putPassword.onclick = () => {
            console.log(newPassword.value)
            let newInfo = { password : newPassword.value }

            if (regPassword.test(newPassword.value)){
              fetch(`http://localhost:5000/api/user/${id}` , { 
                method: "PUT",
                body : JSON.stringify(newInfo),
                headers: {
                  "Content-type": "application/json",
                  Authorization : `Bearer ${JSON.parse(Token)}`
                },
              })
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
                setTimeout("location.reload(true);",400)
            })
            }
            else {
              let password = document.getElementById('passwordLabel')
              password.style.color = "red"
              password.style.fontWeight = "bold"

            }
          }


        },
        returnHome(){
          let profil = document.getElementsByClassName("profil")
          let hide = document.getElementById('hide')

          hide.style.display ="none";

          profil[0].style.display = 'none'

        },
        deleteAccount(){
          console.log("Je veux supprimer le compte")
          fetch(`http://localhost:5000/api/user/${id}`, {
             method: "DELETE",
                headers: {
                  Authorization : `Bearer ${JSON.parse(Token)}`
                },
          })
          .then((res) => res.json())
          .then((res) => {
            setTimeout("location.reload(true);",400)
            localStorage.clear()
          })
        },
        disconnect(){
          let profil = document.getElementById('profil')
          profil.style.display = "none"
          localStorage.clear('Token');
          // setTimeout("location.reload(true);",500)
          window.location.href = "/"
        },
        onSelect(){
          const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
          const file = this.$refs.file.files[0];
          console.log(file)
          this.file = file;
          if(!allowedTypes.includes(file.type)){
            this.message = "Filetype is wrong!!"
          }
          if(file.size>500000){
            this.message = 'Too large, max size allowed is 500kb'
          }
        },
        async onSubmit(){
          const formData = new FormData();
          formData.append('file',this.file);
          try{
            await axios.put(`http://localhost:5000/api/user/${id}`, formData, { headers : { Authorization : `Bearer ${JSON.parse(Token)}`}});
            this.message = 'Modifiée !!'
            location.reload()
          }
          catch(err){
            console.log(err);
            this.message = err.response.data.error
          }
        },
        onSelectPost(){

          const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
          const file = this.$refs.filePost.files[0];
          console.log(file)
          this.file = file;
          if(!allowedTypes.includes(file.type)){
            this.message = "Filetype is wrong!!"
          }
          if(file.size>500000){
            this.message = 'Too large, max size allowed is 500kb'
          }
        },
        async onSubmitPost(){
          let userId = localStorage.getItem('ID')
          let newPost = { "userId": userId, "title": `${newPostTitle.value}`, "content": `${newPostContent.value}`, "reposted": false}
          let Token = localStorage.getItem('Token')
          console.log(newPost)

          if(this.file === ""){
            console.log("Pas de photo")
            console.log(newPost)

            fetch("http://localhost:5000/api/posts", {
              method: 'POST',
              body : JSON.stringify(newPost),
              headers: {
                  "Content-type": "application/json",
                  Authorization : `Bearer ${JSON.parse(Token)}`
              },
            })
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              location.reload()
            })
          }
          else {
            const formData = new FormData();
            formData.append('file',this.file);
            formData.append('body', JSON.stringify(newPost));
            try{
              await axios.post(`http://localhost:5000/api/posts`, formData
              ,{headers : { Authorization : `Bearer ${JSON.parse(Token)}`}});

              this.message = 'Modifiée !!'
              location.reload()
            }
            catch(err){
              console.log(err);
              this.message = err.response.data.error
            }
          }

          
        }
    }
}
</script>