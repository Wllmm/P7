<template>
    <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Lato:wght@300&display=swap" rel="stylesheet">    <link rel="stylesheet" href="/public/css/style.css">

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

            <div class="accueil__post__show">
                <div class="accueil__post__show__element"> 
                    <img src="../img/portrait-0360w.jpg" alt="">
                    <div class="accueil__post__show__element__content">
                        <div class="accueil__post__show__element__content__text">
                            <h1>Ceci est un post</h1>
                            <p>Ou l'on raconte ce que l'on veut</p>
                        </div>
                        <div class="accueil__post__show__element__content__comment">
                            <p>Ici on verra les commentaires</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="accueil__post__show">
                <div class="accueil__post__show__element"> 
                    <img src="../img/portrait-0360w.jpg" alt="">
                    <div class="accueil__post__show__element__content">
                        <div class="accueil__post__show__element__content__text">
                            <h1>Ceci est un post</h1>
                            <p>Ou l'on raconte ce que l'on veut</p>
                        </div>
                        <div class="accueil__post__show__element__content__comment">
                            <p>Ici on verra les commentaires</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="accueil__profil"> 
            <img src="../img/portrait-0360w.jpg" alt="">
            <p> Username </p>
        </div>
    </section>
    
    <button @click="disconnect" id="disconnect">Déconnexion</button>
</template>

<style>
* {
  font-family: "Lato", sans-serif;
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
.accueil__post__show__element__content__comment {
  padding-left: 1rem;
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

</style>


<script>

// Besoin de faire un truc si TOKEN est mauvais (ne pourras pas Get les posts et affichage d'un bouton pour aller a la page de connexion)
// Si pas de Token renvoi vers la page de connexion
let Token = localStorage.getItem('Token')
if (!Token) {
setTimeout(function(){location.href="/"} , 0);
}

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

        },
        disconnect(){
            localStorage.clear('Token');
            location.reload();
        }
    }
}
</script>