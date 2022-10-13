<template>
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-3">
            <router-link to="/estadoServicios" type="button" class="btn btn-secondary">Estado de Servicios</router-link>
        </div>
        <div class="col-3">
            <router-link to="/ConfiguracionPeaje" type="button" class="btn btn-secondary">Configuracion de peaje</router-link>
        </div>
        <div class="col-3">
            <router-link to="/informacionPeaje" type="button" class="btn btn-secondary">Informacion del Peaje</router-link>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router';

export default{
    components:{
    }
}
</script>
<style>
.container{
    justify-content: center;
    align-items: center;
}
.col-4{
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    padding-right: 30%;
    padding-left: 30%
}
</style>
