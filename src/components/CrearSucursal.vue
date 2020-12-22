<template>
 <div id="consultarSucursal">
        <h1>Buscar Sucursal</h1>
        <br>
        <form action = "Consultar Sucursal"> 
            <label>Fecha inicio: </label>
            <input v-model="fechaInicio" type="date" id="fechaIncio"/>
            <label>Fecha fin: </label>
            <input v-model="fechaFin" type="date" id="fechaFin"/>
            <label>Hotel: </label>
            <input v-model="nombreHotel" type="text" id="nombreHotel"/>
            <label>Ciudad: </label>
            <input v-model="ciudad" type="text" id="ciudad"/>           
        </form>
        <br>    
        <button v-on:click="ConsultarSucursal">Consultar Sucursal</button>    
        <P>{{Mensaje}}</P>        
        <br>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "consultarSucursal",
    data() {
        return {
            Mensaje: " ",
            Fiesta:[],
            nombreHotel:'',
            ciudad:'',
            fechaFin:'',
            fechaInicio:'',
        };
    },
    methods: {
        ConsultarSucursal: function() {
            axios.post("https://api-hotel-season.herokuapp.com/Hoteles/Sucursales/Consultar", {
                nombre_hotel: this.nombreHotel,
                ciudad: this.ciudad,
                fecha_inicio: this.fechaInicio,
                fecha_fin: this.fechaFin
            })
            .then((response) => {
                this.Mensaje = response.data.Mensaje;
            })
        },
    },
};

</script>
<style>

</style>
