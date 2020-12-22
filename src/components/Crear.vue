<template>
  <div id="Crear">
    <form action="Crear festividad">
      <label>Fecha de Inicio:</label>
      <input v-model="FechaIni" id="FechaIni" type="date"/>
      <br />
      <label>Fecha de fin:</label>
      <input v-model="FechaFin" type="date" />
      <br />
      <label>Ciudad:</label>
      <input v-model="Ciudad" />
      <br />
      <label>Nombre Festividad:</label>
      <input v-model="Fiesta" />
      <br />
      <label>Temporada:</label>
      <input v-model="tipoTemp" />
      <br>
    </form>
    <br>
    <button v-on:click="crearTemp2">Crear Temporada</button>
    <P>{{mensaje}}</P>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "crear",
  data() {
    return {
      mensaje: " ",
      Fiesta:[],
      tipoTemp:'',
      Ciudad:'',
      FechaFin:'',
      FechaIni:'',

          };
  },
  methods: {
    crearTemp2: function () {
 
axios.post('https://api-hotel-season.herokuapp.com/Temporada/Crear/', {

  fecha_inicio: this.FechaIni,
  fecha_fin: this.FechaFin,
  ciudad: this.Ciudad,
  fiesta: this.Fiesta,
  tipo_temp:this.tipoTemp
})
.then((response) => {
  console.log(response);
   this.mensaje = "Festividad agregada Correctamente";
}, (error) => {
  console.log(error);
  this.mensaje = "Error en la creacion";
});
    },
  },
};
</script>
<style>
#Crear{
margin-top: 30px;
text-align: justify;
margin-left: 500px;
}
</style>
