<template>

        <div id="ajouter">

            <input type="text" name="nom" id='nom'> Nom du pokémon
            <br><br>
            <input type="text" name="types" id="types">Types du pokémon 
            <br><br>
            <input type="text" name="hp" id="hp"> HP du pokémon 
            <br><br>
            <input type="text" name="cp" id="cp"> CP du pokémon
            <br><br>
            <input type="text" name="picture" id='picture'> Photo du pokémon
            <br><br>
            <button id="add" @click="add">ADD</button>
            <br><br><br>

        </div>  

        <div id="showPokemon"></div>

        <p> {{allPokemons}} </p>
        

</template>

<script>
export default {
    mounted(){
        this.showPokemons();
    },
    name: 'Button',
    props: '',
    data(){
        return {
        }
    },
    computed:{
        allPokemon(){
            return this.$store.state.allPokemon;
        }
    },
    methods: {
        showPokemons(){
            let user = { username:'pikachu', password:'pikachu' };
            let Token = localStorage.getItem('Token')

             fetch ("http://localhost:3000/api/pokemons", {
                headers : 
                { "Content-type": "application/json",
                Authorization : `Bearer ${JSON.parse(Token)}` }
            })
            .then((res) => res.json())
            .then((res)=> {
            let get = document.getElementById('showPokemon');
            this.$store.commit('setAllPokemon', this.allPokemon = res.data)
            // console.log(res)

                if (res.data.message === 'jwt malformed'){
                    get.innerHTML += `<h1> Veuillez vous connecter pour accéder aux données</h1>`
                    
                }
                else {
                    for (let i in res.data){

                        get.innerHTML += `<h1 id='${res.data[i].name}'> ${res.data[i].name} </h1>
                        <button id='${i}' href="${res.data[i].name}.html">X</button> 
                        <a href='/Pokemon/?id=${res.data[i].id}' class='router-link-active routerlink-exact-active' aria-current="page"> Voir le pokémon </a>
                        <br>`

                    }
                    for (let i in res.data){

                        // console.log(document.getElementById(i))
                        document.getElementById(i).onclick = (e) => {
                        e.preventDefault

                        // console.log(res.data[i].id)

                        fetch(`http://localhost:3000/api/pokemons/${res.data[i].id}`, {
                            method: 'DELETE',
                            headers: {
                                "Content-type": "application/json",
                                Authorization : `Bearer ${JSON.parse(Token)}`
                            },
                        })
                        location.reload()
                        console.log(" Je veux supprimer le Pokémon suivant :  " + JSON.stringify(res.data[i]))
                        }
                    }
                }
            })  
        },

        add(){
        let Token = localStorage.getItem('Token')
        const pokemon = {
            name : nom.value,
            hp : hp.value,
            cp : cp.value,
            picture : picture.value,
            types : [types.value],
        }

        fetch ("http://localhost:3000/api/pokemons", {
            method: 'POST',
            body: JSON.stringify(pokemon),
            headers : 
            { "Content-type": "application/json",
            Authorization : `Bearer ${JSON.parse(Token)}` }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
        location.reload();
        }
    }
}
</script>