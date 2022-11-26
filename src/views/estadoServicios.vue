<template>
<div class="container" v-if="loading">
    <div>
        <div class="spinner-border text-light" role="status"></div>
    </div>
    <h1>Cargando</h1>
</div>
<div class="container" v-if="!loading">
    <div class="col">
        <h3>Listado de Servicios</h3>
        <table class="table">
            <tr>
                <th scope="col">Servicio</th>
                <th scope="col">Levantar servicio</th>
                <th scope="col">Bajar servicio</th>
                <th scope="col">Estado</th>
            </tr>
            <tbody id="myTable">
                <tr>
                    <td>Servicio de reconocimineto</td>
                    <td><button type="button" class="btn btn-success" v-on:click="startRecognizeService()">Levantar servicio</button></td>
                    <td><button type="button" class="btn btn-danger" v-on:click="shutdownRecognizeService()">Bajar servicio</button></td>
                    <td v-if="servicioReconocimiento">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked Disabled>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Habilitado</label>
                    </td>
                    <td v-if="!servicioReconocimiento">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" Disabled>
                        <label class="form-check-label" for="flexSwitchCheckDisabled">deshabilitado</label>
                    </td>
                </tr>
                <tr>
                    <td>Servicio de Solicitud de pago</td>
                    <td><button type="button" class="btn btn-success" v-on:click="startPaymentService()">Levantar servicio</button></td>
                    <td><button type="button" class="btn btn-danger" v-on:click="shutdownPaymentService()">Bajar servicio</button></td>
                    <td v-if="servicioPagos">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked Disabled>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Habilitado</label>
                    </td>
                    <td v-if="!servicioPagos">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" Disabled>
                        <label class="form-check-label" for="flexSwitchCheckDisabled">deshabilitado</label>
                    </td>
                </tr>
                <tr>
                    <td>Servicio de Multas</td>
                    <td><button type="button" class="btn btn-success" v-on:click="startFinesService()">Levantar servicio</button></td>
                    <td><button type="button" class="btn btn-danger" v-on:click="shutdownFinesService()">Bajar servicio</button></td>
                    <td v-if="servicioMultas">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked Disabled>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Habilitado</label>
                    </td>
                    <td v-if="!servicioMultas">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" Disabled>
                        <label class="form-check-label" for="flexSwitchCheckDisabled">deshabilitado</label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import { useRouter } from 'vue-router'
import axios from "axios"
export default{
    components:{
    },
    data() {
        return {
            servicioReconocimiento: "",
            servicioPagos: "",
            servicioMultas: "",
            loading: false
        };
    },
    mounted(){
        this.getValues();
    },
    methods: {
        shutdownRecognizeService(){
            this.loading = true
            axios.put("https://localhost:44322/Servicios/PutApagarServicioReconocimiento")
            .then(response=> {
                if(response.status==200) {
                    alert('Servicio de reconocimiento apagado');
                    this.servicioReconocimiento = false
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
            this.loading = false
        },
        startRecognizeService(){
            this.loading = true
            axios.put("https://localhost:44322/Servicios/PutEncenderServicioReconocimiento")
            .then(response=> {
                if(response.status==200) {
                    alert('Servicio de reconocimiento encendido');
                    this.servicioReconocimiento = true
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
            this.loading = false
        },
        shutdownPaymentService(){
            this.loading = true
            axios.put("https://localhost:44322/Servicios/PutApagarServicioPagos")
            .then(response=> {
                if(response.status==200) {
                    alert('Servicio de pagos apagado');
                    this.servicioPagos = false
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
            this.loading = false
        },
        startPaymentService(){
            this.loading = true
            axios.put("https://localhost:44322/Servicios/PutEncenderServicioPagos")
            .then(response=> {
                if(response.status==200) {
                    alert('Servicio de pagos encendido');
                    this.servicioPagos = true
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
            this.loading = false
        },
        shutdownFinesService(){
            this.loading = true,
            axios.put("https://localhost:44322/Servicios/PutApagarServicioMulta")
            .then(response=> {
                if(response.status==200) {
                    alert('Servicio de Multas Apagado');
                    this.servicioMultas = false
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
            this.loading = false
        },
        startFinesService(){
            this.loading = true,
            axios.put("https://localhost:44322/Servicios/PutEncenderServicioMulta")
            .then(response=> {
                if(response.status==200) {
                    alert('Servicio de Multas encendido');
                    this.servicioMultas = true
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
            this.loading = false
        },
        getValues(){
            this.loading = true
            axios.get("https://localhost:44322/Servicios/GetEstadoServicios")
            .then(response=>{
            response.data.forEach((values) => {
                switch(values.nombre_servicio){
                    case "Multa":
                        this.servicioMultas = values.encendido
                        console.log(this.servicioMultas.toString())
                        break;
                    case "Reconocimiento":
                        this.servicioReconocimiento = values.encendido
                        console.log(this.servicioReconocimiento.toString())
                        break;
                    case "Pago":
                        this.servicioPagos = values.encendido
                        console.log(this.servicioPagos.toString())
                        break;
                }
            });
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            })
        }
    }
}
</script>

<style>
.container{
    justify-content: center;
    align-items: center;
}
.col{
    justify-content: center;
    align-items: center;
    padding-right: 20%;
    padding-left: 20%
}
span{
    margin-right: 5px
}
label{
    margin-right: 5px
}
</style>