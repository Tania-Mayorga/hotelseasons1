<template>
  <div id="app">
    <div class="header" id="header">
      <img src="./assets/2.png" v-on:click = "irInicio"  height="200">
      
      <nav>
        <button v-on:click = "VerTemp" > Ver Temporadas </button>
        <button  v-on:click = "Buscar"> Buscar </button>
        <button v-on:click = "crearTemp"> Crear </button>
        <button v-on:click = "CrearSucursal"> Crear Sucursal </button>
        <br> <br>
      </nav>
    </div>
    <div class="main-component" id="main">
     <router-view/>
    </div>
    <div class="footer" id="footer"> 
      <div id="info">
      <h2 >Misión TIC 2022</h2>
      <H5 >Datos de contacto: <br>
      Mail: misiontic2020@mail.com <br>
      Tel: (+57) 031-5555
      </H5>
      </div>
    </div>
  </div>
</template>

<script>
import crear from "./components/Crear";
//import crear from './components/crear.vue'
export default {
  name: "App",
  components: {crear},
 // data: function(){
   // return {
     // is_auth: localStorage.getItem('isAuth') || false
    //}
  //},
    methods: {
crearTemp: function(){
if(this.$route.name != "crear"){
this.$router.push({ name: "crear"});
}
},
irInicio: function(){
if(this.$route.name != "presentacion"){
this.$router.push({ name: "presentacion"});
}
},
VerTemp: function(){
if(this.$route.name != "mostrar"){
this.$router.push({ name: "mostrar"});
}
},
Buscar: function(){
if(this.$route.name != "buscar"){
this.$router.push({ name: "buscar"});
}
},
CrearSucursal: function(){
if(this.$route.name != "crearsucursal"){
this.$router.push({ name: "crearsucursal"});
}
}
},
     
    }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  justify-content: center;
  justify-items: center;
}
#header{
  background-color:rgb(83,83,83);

}
#footer{
  background-color:rgb(83,83,83);
  
}
nav{
  text-align: right;
}
#main{
height: 80%;
justify-content: center;

}
#titulo_principal{
  padding-top: 20px;
}

#info{
color: white;
}

</style>
