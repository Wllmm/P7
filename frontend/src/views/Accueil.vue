<template>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Lato:wght@300&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div id='hide'></div>
    <div class="createPost">
        <div class="createPost__head">
            <img src="../img/portrait-0360w.jpg" alt="">

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
           <a href="#" id="poster" @click="post">Poster !</a>
        </div>
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
                <img src="../img/portrait-0360w.jpg" alt="">
                <form action="post">
                    <label for="addPost">Create post</label>
                    <input type="text">
                    <button>Send</button>
                </form>
            </div>

            <div id="showPost"></div>


        </div>
        <div class="accueil__profil"> 
            <img src="../img/portrait-0360w.jpg" alt="">
            <p id="username"> Username </p>
        </div>
    </section>
    
    <button @click="disconnect" id="disconnect">Déconnexion</button>
</template>

<style>

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
.createPost__head img {
  width: 80px;
  border-radius: 50%;
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

body { 
  margin: 0;
}
* {
  font-family: "Lato", sans-serif;
}
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
.accueil__post__add img {
  width: 60px;
  border-radius: 50%;
  padding: 1rem;
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
.accueil__post__show__element img {
  margin-top: 0.2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 1rem;
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
  border: 1px solid white;
  margin-top: 1rem;
  padding: 1rem;
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
  border-color: #152545;
  cursor: pointer;
  border-radius: 1rem;
  background-color: #152545;
  color: white;
  padding: 0 0.5rem 0 0.5rem;
}
.accueil__profil {
  border: 2px solid white;
  margin: 2rem 2rem 2rem 0;
  height: fit-content;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
  background-color: #d0575f;
}
.accueil__profil img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}
.accueil__profil p {
  font-weight: bold;
  font-size: 1.2rem;
}

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
fetch(`http://localhost:3000/api/user/${id}`, {
   headers: {
      Authorization : `Bearer ${JSON.parse(Token)}` 
    },
})
.then((res) => res.json())
.then((res) => {
  console.log(res.data)
  let username = document.getElementById('username')
  username.innerText = res.data.username
  
})




export default {
    mounted(){
        this.onLoad();
    },
    name: 'accueil',
    props: '',
    data(){
      return { 
      }
    },
    computed:{
    },
    components: {
 
    },
    methods: {
        onLoad(){
          let token = localStorage.getItem('Token');
          // On récupère tout les posts au passage si le token est mauvais on indique une erreur et demande une reconnexion
          fetch("http://localhost:3000/api/post", {
            headers: {
                Authorization : `Bearer ${JSON.parse(Token)}` 
            },
          })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            // Affichage d'une plus belle erreur
            if (res.data.message === "invalid token"){ console.log("Erreur d'authentification")}
            else {
              let focus = document.getElementById("showPost")

              for (let data of res.data){
                focus.innerHTML += 
                  `<div class="accueil__post__show">
                    <div class="accueil__post__show__element"> 
                        <img src="/img/portrait-0360w.a3b4ee86.jpg" alt="">
                        <div class="accueil__post__show__element__content">
                            <div class="accueil__post__show__element__content__text">
                                <h1>${data.title}</h1>
                                <p>${data.content}</p>
                                <span> <button class='like'><i class="far fa-thumbs-up"></i></button>  <button class='dislike'><i class="far fa-thumbs-down"></i></button </span>
                            </div>
                            <div class="accueil__post__show__element__content__comment">
                                <h3>Commentaires </h3>
                                <div class="accueil__post__show__element__content__comment__nb">
                                    <p> Nom d'utilisateur </p>
                                    <p>Bonjour c'est pas top ton post</p>
                                    <span><i class="far fa-thumbs-up"></i> <i class="far fa-thumbs-down"></i></span>
                                </div>
                                <div class="accueil__post__show__element__content__comment__nb">
                                    <p> Nom d'utilisateur </p>
                                    <p>Moi j'aime bcp</p>
                                    <span><i class="far fa-thumbs-up"></i> <i class="far fa-thumbs-down"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>`;
              }

              // On regarde si l'utilisateur a like ou dislike un post 
              // On affiche le bon resultat et on autorise la modification
              
              for (let i in res.data){
                let likePost = document.getElementsByClassName('like')
                let dislikePost = document.getElementsByClassName('dislike')

                    likePost[i].onclick = () => {
                      console.log(res.data[i])
                    } 

                    dislikePost[i].onclick = () => {
                      console.log(res.data[i])
                    } 
              }
   
              // Affichage de la partie CREATE POST 
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
// Fin else

          })



        },
        post(){
          let userId = localStorage.getItem('ID')
          let newPost = { "userId": userId, "title": `${newPostTitle.value}`, "content": `${newPostContent.value}` }
          let Token = localStorage.getItem('Token')
          fetch("http://localhost:3000/api/posts", {
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
          })

        setTimeout("location.reload(true);",400)


        },
        disconnect(){
            localStorage.clear('Token');
            location.reload();
        }
    }
}
</script>