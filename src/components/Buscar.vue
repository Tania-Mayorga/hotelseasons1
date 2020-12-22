<template>
  <div id="buscar">
    <h1 class="tittle">Buscar Festividades</h1>
    <hr> 
    <div >
      <label>Ciudad:</label>
      <input type="text" style="border: solid 2px" v-model="GETciudad"  placeholder="Buscar ciudades.."/>
      <br>
      <br>
      <button v-on:click= "fetch">CONSULTAR</button>
     
      <div v-if="busqueda.Mensaje==null">
        <table border="1" style="margin: 0 auto;" >
        <h2>Festividades encontradas</h2>
       <tr>
        <th>Fecha Inicio</th>
        <th>Fecha Fin</th>
        <th>Ciudad</th>
        <th>Fiesta</th>
        <th>Temporada</th>
      </tr>
      <tr v-for="Fiesta in busqueda">
        <td>{{ Fiesta.fecha_inicio	 }}</td>
        <td>{{ Fiesta.fecha_fin	 }}</td>
        <td>{{ Fiesta.ciudad }}</td>
        <td>{{ Fiesta.fiesta }}</td>
        <td>{{ Fiesta.tipo_temp }}</td>
      </tr>
      </table>
      </div>
      <div v-else>
        <p>{{busqueda.Mensaje}}</p>
        <p>{{mensaje1}}</p>
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
      Fiesta:[],
      mensaje1:'',
     
      
    }
  },
  methods: {
    fetch:function() {
      axios.get("https://api-hotel-season.herokuapp.com/Temporada/?ciudad=" + this.GETciudad)
      .then((result) => {
        this.busqueda = result.data;
      })
			.catch((err) => {
        console.log(err);
          this.mensaje1 = "Error en la consulta" + err.data;
      });
      
    }
  }
};

</script>