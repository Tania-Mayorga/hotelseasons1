<template>
  <div id="mostrar_temp">
       <div style="text-align:center;">
      <h2>Festividades del año</h2>
      <table border="1" style="margin: 0 auto;">
       <tr>
        <th>Fecha Inicio</th>
        <th>Fecha Fin</th>
        <th>Ciudad</th>
        <th>Fiesta</th>
      </tr>
      <tr v-for="Fiesta in temporadas">
        <td>{{ Fiesta.fecha_inicio	 }}</td>
        <td>{{ Fiesta.fecha_fin	 }}</td>
        <td>{{ Fiesta.ciudad }}</td>
        <td>{{ Fiesta.fiesta }}</td>
      </tr>

      </table>
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
      .get("https://backend-hotelseason.herokuapp.com/Temporada/")
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

</style>
