<template>
    <h2>Essai de données</h2>
    <button @click="click">Click</button>
    <button @click="clear">Clear all</button>
    <!-- <p>{{ totalGeneral }}</p> -->
    <p> {{allPokemon}}</p>
</template>
 

<script>

export default {
    name: 'Default',
    props: '',
    data(){
        return {
        }
    },
    computed:{
        allPokemon(){
            let pokemons = this.$store.state.allPokemon;
            return pokemons
        }
    },
    methods: {
    click(){
        this.$store.commit('setAllPokemon', this.allPokemon += "Un nouveau pokémon  ")
    },
    clear(){
        this.$store.commit('setAllPokemon', this.allPokemon = "")
    }

    },
}

</script>
