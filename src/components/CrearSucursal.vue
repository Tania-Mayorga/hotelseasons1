<template>
 <div>
        <h1>Buscar Sucursal</h1>
        <form @submit="ConsultarSucursal"> 
            <label for="inicial" >Fecha inicio: </label>
            <input v-model="enviar.inicio_fecha" type="date" name="inicial">
            <label for="final" >Fecha fin: </label>
            <input v-model="enviar.final_fecha" type="date" name="final">
            <label for="busqueda_hotel" >Hotel: </label>
            <input v-model="enviar.nombre_hotel" type="text" name="busqueda_hotel">
            <label for="busqueda_city" >Ciudad: </label>
            <input v-model="enviar.ciudad" type="text" name="busqueda_city">
            <input type="submit">            
        </form>
        <br>        
        <textarea v-model="recibir"> </textarea>        
        <br>
        <br>
        <h1>Crear Sucursal</h1>        
        <form @submit="CrearSucursal" method="post"> 
            <label for="inicial" >Fecha inicio: </label>
            <input v-model="enviar.inicio_fecha" type="date" name="inicial">
            <label for="final" >Fecha fin: </label>
            <input v-model="enviar.final_fecha" type="date" name="final">
            <label for="busqueda_hotel" >Hotel: </label>
            <input v-model="enviar.nombre_hotel" type="text" name="busqueda_hotel">
            <label for="busqueda_city" >Ciudad: </label>
            <input v-model="enviar.ciudad" type="text" name="busqueda_city">
            <input type="submit">
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "Sucursal",
    data() {
        return{
            enviar: {
                inicio_fecha: null,
                final_fecha: null,
                nombre_hotel: null,
                ciudad: null,
            },
            recibir: null,
            datosSucursal: {                
                inicio_fecha: null,
                final_fecha: null,
                nombre_hotel: null,
                ciudad: null,
            }
        }
    },
    methods: {
        ConsultarSucursal: function() {
            this.axios.get("https://backend-hotelseason.herokuapp.com/Temporada/CiudadFecha" + this.enviar)
            .then((result) => {
                this.recibir = result.data.sucursal_hoteles
                //{datosSucursal:Este es el texto}
            })
            .catch((err) => {
                console.log(err);
            })    
        },
        CrearSucursal: function() {
            this.axios.post("https://backend-hotelseason.herokuapp.com/Temporada/CiudadFecha", this.datosSucursal)
            .then((result) => {                
                console.log(result.data);
            })
        }
    }
}

</script>
<style>

</style>
