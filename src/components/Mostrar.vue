<template>
  <div id="mostrar_temp">
       <div style="text-align:left;">
      
      
      <table border="1" style="margin: 0 auto;" >
        <h2>Festividades del año</h2>
       <tr>
        <th>Fecha Inicio</th>
        <th>Fecha Fin</th>
        <th>Ciudad</th>
        <th>Fiesta</th>
        <th>Temporada</th>
      </tr>
      <tr v-for="Fiesta in temporadas">
        <td>{{ Fiesta.fecha_inicio	 }}</td>
        <td>{{ Fiesta.fecha_fin	 }}</td>
        <td>{{ Fiesta.ciudad }}</td>
        <td>{{ Fiesta.fiesta }}</td>
        <td>{{ Fiesta.tipo_temp }}</td>
      </tr>

      </table>

      <img id="imagen1" src="../assets/Fiestas-anual.gif" height="700">

    </div>  
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "MostraTemp",
  data() {
    return {
      temporadas:[]
    
    };
  },
  methods: {

  },
    beforeCreate: function() {
    axios
      .get("https://api-hotel-season.herokuapp.com/Temporada/?ciudad=")
      .then(respuesta => {
        this.temporadas = respuesta.data;
      })
      .catch(error => {
        console.log(error);
        alert("Error en la peticion con codigo" + error.response.status);
      });
  }
};
</script>
<style>


table{
  float: left;
}

</style>
