<template>
    <div id="msg"></div>

</template>

<script>

// Si pas de Token renvoi vers la page de connexion
let Token = localStorage.getItem('Token')
if (!Token) {
setTimeout(function(){location.href="/"} , 2000);
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
        }
    }
}
</script>