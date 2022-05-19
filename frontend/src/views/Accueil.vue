<template>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Lato:wght@300&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div id='hide'></div>

     <section class="profil">
        <div class="profil__image" >
            <img class="imageProfil" src="localhost:5000/uploads/" alt="">
            

            <form id="profils" @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="fields">
                  <input type="file" ref="file" @change="onSelect" />
                </div>
                <br>
                <div class="fields">
                  <button id="putPicture">Valider le changement de photo </button>
                </div>
                <div class="message">
                  <h5>{{message}}</h5>
                </div>
            </form>


            <i class="fas fa-home" @click="returnHome"></i>
        </div>

        <div class="profil__infoUser">

            <div class="email">
                <h2 id="profilEmail"> Nom d'utilisateur </h2>
                <label for=""> Changer l'addresse email : </label>
                <input type="text" id="newEmail">
                <i class="fas fa-magic" id="emailValid"></i>

            </div>
            <div class="password">
                <h2 id="profilPassword"> Modifier le mot de passe </h2>
                <label for=""> Changer le mot de passe : </label>
                <input type="text" id="newPassword">
                <i class="fas fa-magic" id="passwordValid"></i>
            </div>
            <button id="deleteAccount" @click="deleteAccount"> Supprimer le compte (définitif) </button>
        </div>
    </section>

    <div class="createPost">
      
          <form id="createPost" @submit.prevent="onSubmitPost" enctype="multipart/form-data">

              <div class="createPost__head">
                <img class="" src="../img/portrait-0360w.jpg" alt="">

                <div class="createPost__head__title">
                    <label for="addTitle"> Titre : </label>
                    <input type="text" id="newPostTitle">
                    
                </div>
                <i class="fas fa-times"></i>
              </div>
              
              <div class="createPost__content">
                  <label for="addContent"> Votre texte ici :</label>
                  <textarea rows="10" cols="90" id="newPostContent"></textarea>
              </div>

              <div class="createPost__files">
                <label for="image_input">Choissisez votre image</label>
                  <input type="file" ref="filePost" @change="onSelectPost" />
              </div>
              
                <br><br>

              <div class="button">
                <button>Valider le changement de photo </button>
              </div>

          </form>


    </div>

    <section class="accueil">
        <nav>
            <h2>Navigation</h2>
            <ul>
                <li>Accueil</li>
                <li>Populaires</li>
                <li>Messages</li>
                <li>Profil</li>
                <li>Notifications</li>
            </ul>
        </nav>

        <div class="accueil__post"> 
            <div class="accueil__post__add">
                <img class="imageProfil" src="../img/portrait-0360w.jpg" alt="">
                <form action="post">
                    <label for="addPost">Create post</label>
                    <input type="text">
                    <button>Send</button>
                </form>
            </div>

            <div id="showPost"></div>


        </div>
       <div class="accueil__profil" id="profil"> 
            <div id="accueil__profil__always"> 
                <!-- <img class="imageProfil" src="../img/portrait-0360w.jpg" alt=""> -->
                <p id="username"> Username </p>
            </div>
            <div id="accueil_profil__active">
                <p @click="profilUser" id="profilUser"> Profil </p>
                <p @click="disconnect" id="disconnect"> Déconnexion </p>
            </div>

        </div>
    </section>
</template>

<style>
body { 
  margin: 0;
  display: flex;
  justify-content: center;
}
* {
  font-family: "Lato", sans-serif;
}

/* Image création de post  */
.createPost__head img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
/* Image ajout de post */
.accueil__post__add img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  padding: 1rem;
}
/* Image POST */
.accueil__post__show__element img {
  margin-top: 0.2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  padding: 1rem;
}
/* Image profil */
.accueil__profil img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}
/* Image dans la modif profil */
.profil__image img {
    width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
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


.profil {
  display: flex;
  position: absolute;
  height: fit-content;
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
.profilImage {
  width: 150px;
  margin-bottom: 2rem;
  border-radius: 50%;
}
.profil__image i {
  font-size: 2rem;
}
.profil__image i:hover {
  color: #0e47b9;
  cursor: pointer;
}
.profil__infoUser {
  border: 2px solid #d0575f;
  border-radius: 1rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-top: 2rem;
  padding-right: 2rem;
}
.profil__infoUser button {
  all: unset;
  margin: 1em 0 2rem 0;
  width: fit-content;
  cursor: pointer;
  border: 2px solid white;
  padding: 1rem;
  font-weight: bold;
  border-radius: 1rem;
}
.profil__infoUser button:hover {
  background-color: #152545;
  color: white;
}
.profil__infoUser h2 {
  color: #d0575f;
  margin: 0 0 0.5rem 0;
}
.profil__infoUser input {
  margin-bottom: 1.5rem;
}
.profil__infoUser label {
  font-weight: bold;
}
.profil__infoUser i {
  font-size: 1rem;
  margin-left: 1.5rem;
}
.profil__infoUser i:hover {
  color: red;
  cursor: pointer;
}

/*# sourceMappingURL=style.css.map */

.fa-times:hover{
  color: red;
}
.fa-check:hover{
  color: greenyellow;
}
.fa-pen-alt:hover{
  color: rgb(0, 162, 255);
}
.new__comment{
  border:1px solid white ;
  margin: 1rem 0 1rem 0;
  padding: 0 1rem 0 1rem;
}
.new__comment h4 {
  margin: 1rem 0 0.5rem 0;
}
.accueil__post__show__element__content__comment__add textarea{
 resize: none;
 margin-top: 1rem;
 outline: none;
 border: none;
 border-radius: 0.2rem;
}
.fa-trash:hover{
  color: red;
}
.fa-thumbs-up:hover{
  color: greenyellow;
  font-weight: bold;
}
.fa-thumbs-down:hover{
  color: red;
  font-weight: bold;
}

.createPost {
  background-color: #d0575f;
  border-radius: 0.5rem;
  visibility: hidden;
  position: absolute;
  flex-direction: column;
  width: 40%;
  margin: 10rem 30% 0 30%;
  padding: 1rem;
}
.createPost__head {
  display: flex;
}

.createPost__head i {
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  background-color: white;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 5%;
}
.createPost__head__title {
  margin-left: 10%;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.createPost__head__title input {
  width: 90%;
  min-width: 10rem;
  margin-left: 2rem;
  border-radius: 0.2rem;
  background-color: #e0e2e5;
  border: none;
  height: 1.5rem;
}
.createPost__content {
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
}
.createPost__content label {
  margin-top: 1rem;
  font-weight: bold;
}
.createPost__content textarea {
  margin-left: 2rem;
  width: 35rem;
  height: 10rem;
  outline: none;
  resize: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e0e2e5;
  border: none;
}
.createPost__files {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.createPost__files a {
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  font-weight: bold;
  background-color: #e0e2e5;
}
.createPost__files a:hover {
  background-color: black;
  color: white;
  font-weight: bold;
}

/*# sourceMappingURL=style.css.map */


#hide {
  display: block;
  position: absolute;
  width: 100%;
  height: 120rem;
  background-color: #152545;
  opacity: 70%;
  display: none;
}
button { 
    all: unset;
}
.accueil {
  background-color: #e0e2e5;
  display: flex;
  justify-content: space-between;
  color: #152545;
}
.accueil nav {
  border: 2px solid white;
  background-color: #d0575f;
  margin: 2rem 0 2rem 1rem;
  padding: 1rem;
  height: fit-content;
  border-radius: 1rem;
}
.accueil nav h2 {
  margin-top: 0;
  text-decoration: overline;
}
.accueil nav ul {
  margin-top: 3rem;
  padding: 0;
}
.accueil nav li {
  list-style: none;
  color: white;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
}
.accueil nav li:hover {
  color: #203868;
  font-weight: bold;
  cursor: pointer;
}
.accueil__post {
  margin: 2rem 0 2rem 0;
  width: 50%;
  cursor: pointer;
}
.accueil__post__add {
  display: flex;
  align-items: center;
  border: 2px solid white;
  margin-bottom: 5rem;
  border-radius: 0.5rem;
  color: white;
  background-color: #4c5c6d;
}

.accueil__post__add form {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.accueil__post__add form label {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
.accueil__post__add form input {
  flex: 1;
  margin: 0 2rem 0 2rem;
  height: 30px;
}
.accueil__post__add form button {
  all: unset;
  margin-right: 2rem;
  cursor: pointer;
}
.accueil__post__show {
  margin-top: 2rem;
  color: white;
  background-color: #4c5c6d;
  box-shadow: 0px 0px 5px 0px #000;
}
.accueil__post__show__element {
  display: flex;
}

.accueil__post__show__element__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.accueil__post__show__element__content__text {
  padding-left: 1rem;
}
.accueil__post__show__element__content__text i {
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
}
.accueil__post__show__element__content__text i {
 cursor: pointer;
}
.accueil__post__show__element__content__comment {
  padding: 0 1rem 0 1rem;
  margin: 1.5rem 1rem 1rem 0;
  padding-bottom: 1rem;
  background-color: #d0575f;
}
.accueil__post__show__element__content__comment h3 {
  text-decoration: overline;
}
.accueil__post__show__element__content__comment__nb {
  
  margin-top: 1rem;
  
}
.accueil__post__show__element__content__comment__nb p {
  margin-top: 0;
}
.accueil__post__show__element__content__comment__nb i {
  margin-right: 1rem;
  font-size: 1rem;
}
.accueil__post__show__element__content__comment__nb i:hover {
 cursor: pointer;
}
.accueil__profil:hover {
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
}
.accueil__profil:hover #accueil__profil__always {
  background-color: #152545;
}

.accueil__profil {
  margin: 2rem 2rem 2rem 0;
  height: fit-content;
  flex-direction: column;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  background-color: #d0575f;
}


.accueil__profil p {
  font-weight: bold;
  font-size: 1.2rem;
}

#accueil__profil__always {
  display: flex;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 1rem;
}

#accueil_profil__active {
  width: 100%;
  color: white;
}
#accueil_profil__active p {
  padding: 0 1rem 0 1rem;
  display: flex;
  justify-content: center;
}
#accueil_profil__active p:hover {
  color: #152545;
}

/*# sourceMappingURL=style.css.map */


/*# sourceMappingURL=style.css.map */


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
              for (let data of res.data){
                  let userId = localStorage.getItem('ID');
                  let id = data.id
                  if (data.reposted === true){
                    // console.log(data)
                    let  userWhoRepost = allUser.data.find(el => el.id == data.userId)
                    let userOfPost = allUser.data.find(el => el.id == data.initialUser)
                    // console.log(userOfPost)
                    // console.log(userWhoRepost)

                    focus.innerHTML += 
                      `<div class="accueil__post__show">
                        <div class="accueil__post__show__element"> 
                            <img src="http://localhost:5000/uploads/${userWhoRepost.picture}" alt="">
                            <div class="accueil__post__show__element__content">
                                <div class="accueil__post__show__element__content__text">
                                    <h4> ${userWhoRepost.prenom}  ${userWhoRepost.nom} </h4>
                                    <h1 class="actual__title">${data.title}</h1>
                                    <h3> <em>respost de ${userOfPost.prenom}   ${userOfPost.nom}</em> </h3>
                                    <div class="modify__title">
                                      <label for="addTitle"> Modifier le titre : </label>
                                      <input type="text" class="modifyTitle" value="${data.title}">
                                    </div>

                                    <img src="http://localhost:5000/uploads/${data.picturePath}" alt="">
                                    <p class="actual__content">${data.content}</p>
                                    <div class="modify__content">
                                      <label for="modifyContent"> Modifier votre post :</label>
                                      <textarea rows="10" cols="90" class="modifyContent" >${data.content}</textarea>
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
                                      <label>Écrire un commentaire :</label>
                                      <textarea rows="3" cols="90" class="newCommentContent"></textarea>
                                      <i class="fas fa-caret-square-right" id="${id}"></i>
                                    </div>
                                    <div class="accueil__post__show__element__content__comment__nb" id="comment${id}"></div>
                                </div>
                            </div>
                        </div>
                      </div>`;

                  }else {
                    console.log(data)
                    let userOfPost = allUser.data.find(el => el.id == data.userId)
                    // console.log(userOfPost)

                    focus.innerHTML += 
                      `<div class="accueil__post__show">
                        <div class="accueil__post__show__element"> 
                            <img src="http://localhost:5000/uploads/${userOfPost.picture}" alt="">
                            <div class="accueil__post__show__element__content">
                                <div class="accueil__post__show__element__content__text">
                                    <h4> ${userOfPost.prenom}  ${userOfPost.nom} </h4>
                                    <h1 class="actual__title">${data.title}</h1>
                                    <div class="modify__title">
                                      <label for="addTitle"> Modifier le titre : </label>
                                      <input type="text" class="modifyTitle" value="${data.title}">
                                    </div>

                                    <img class="postImages" src="http://localhost:5000/uploads/${data.picturePath}" alt="">
                                    <p class="actual__content">${data.content}</p>
                                    <div class="modify__content">
                                      <label for="modifyContent"> Modifier votre post :</label>
                                      <textarea rows="10" cols="90" class="modifyContent" >${data.content}</textarea>
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
                                      <label>Écrire un commentaire :</label>
                                      <textarea rows="3" cols="90" class="newCommentContent"></textarea>
                                      <i class="fas fa-caret-square-right" id="${id}"></i>
                                    </div>
                                    <div class="accueil__post__show__element__content__comment__nb" id="comment${id}"></div>
                                </div>
                            </div>
                        </div>
                      </div>`;
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
                  for (let data of res.data){
                    // console.log(data)
                    let commentAdd = document.getElementById(`comment${data.id}`)

                    // Dans les commentaires : 
                     for (let comment of comments.data){
                      //  console.log(comment)
                        if (comment.postId === data.id){

                          // console.log(comment.userId)
                          // console.log(users.data)
                          let commentUser = users.data.find(el => el.id == comment.userId)

                          commentAdd.innerHTML += 
                          `<div class='new__comment'>
                              <h4> ${commentUser.prenom}   ${commentUser.nom} </h4>
                              <p>${comment.content}</p>
                              <button class="deleteComment"> <i class="fas fa-trash"></i> </button> 
                            </div>`
                        }
                      } 
                  }

                  let commentId = document.getElementsByClassName('deleteComment')
                  // console.log(commentId)
                     
                  for (let i in comments.data){
                    commentId[i].onclick = () => {
                      // console.log(comments.data[i].id)
                      fetch(`http://localhost:5000/api/comments/${comments.data[i].id}`, {
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

                  // Affichage de la possibilité de supprimé le commentaire
                
                  for (let i in comments.data){
                    // console.log(comments.data[i])

                      fetch(`http://localhost:5000/api/user/${id}`, {
                        headers: {
                            Authorization : `Bearer ${JSON.parse(Token)}` 
                          },
                      })
                      .then((res) => res.json())
                      .then((user) => { 

                        // console.log(comments.data[i])
                        if (user.data.idAdmin === true) {
                          return
                        }                    
                        if (comments.data[i].userId == user.data.id){
                          
                        }
                        else {
                          commentId[i].style.display = "none" 
                        }
                      }) 
                    }
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



          // LIKE
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
            // FIN LIKE 



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
        // post(){
        //   console.log("Aussi j'envoie les données du post")
        //   let userId = localStorage.getItem('ID')
        //   let newPost = { "userId": userId, "title": `${newPostTitle.value}`, "content": `${newPostContent.value}` }
        //   let Token = localStorage.getItem('Token')
        //   // console.log(document.getElementById('image_input').value)
        //   fetch("http://localhost:5000/api/posts", {
        //     method: 'POST',
        //     body : JSON.stringify(newPost),
        //     headers: {
        //         "Content-type": "application/json",
        //         Authorization : `Bearer ${JSON.parse(Token)}`
        //     },
        //   })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     console.log(res)
        //   })

        // setTimeout("location.reload(true);",400)

        // },
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
              alert("Email non valide afficher une plus belle erreur")
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
              alert("Mot de passe non valide afficher une plus belle erreur")
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
            localStorage.clear('Token');
            location.reload();
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
          let newPost = { "userId": userId, "title": `${newPostTitle.value}`, "content": `${newPostContent.value}`}
          let Token = localStorage.getItem('Token')
          console.log(newPost)


          const formData = new FormData();
          formData.append('file',this.file);
          formData.append('body', JSON.stringify(newPost));
          try{
            await axios.post(`http://localhost:5000/api/posts`, formData
            ,{headers : { Authorization : `Bearer ${JSON.parse(Token)}`}});

            this.message = 'Modifiée !!'

          }
          catch(err){
            console.log(err);
            this.message = err.response.data.error
          }
        }
    }
}
</script>