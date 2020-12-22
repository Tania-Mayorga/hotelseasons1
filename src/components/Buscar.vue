<template>
  <div id="buscar">
    <h1 class="tittle">Buscar Festividades</h1>
    <hr> 
    <div class="search-wrapper">
      <label>Ciudad:</label>
      <input type="text" style="border: solid 2px" v-model="GETciudad"  placeholder="Buscar ciudades.."/>
      <br>
      <br>
      <button v-on:click="fetch">CONSULTAR</button>
      <div >
        <h2>{{ busqueda }}</h2>
      </div>
    </div>
  </div>
</template>


<script>

import axios from "axios";
export default {
  name: "Buscar",
  data() {
    return {
      GETciudad:"",
      busqueda:[],
      
    }
  },
  methods: {
    fetch() {
      this.axios.get("https://api-hotel-season.herokuapp.com/Temporada/?ciudad=" + this.GETciudad)
      .then((result) => {
        this.busqueda = result.data;
      })
			.catch((err) => {
        console.log(err);
      });
    }
  }
};

</script>