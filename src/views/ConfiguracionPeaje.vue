<template>
<div class="container" v-if="loading">
    <div>
        <div class="spinner-border text-light" role="status"></div>
    </div>
    <h1>Cargando</h1>
</div>
<div class="container" v-if="!loading">
    <div class="row">
        <div class="col-4">
            <h4>Configuracion de solicitudes de pago por categoria o tipo de vehiculo:</h4>
            <div class="row mt-3">
                <label for="motoPago">
                    <span>Moto:</span>
                    <input disabled type="text" name="motoPago" id="motoPago" v-model="Moto.value">
                </label>
            </div>
            <div class="row mt-3">
                <label for="autoPago">
                    <span>Auto:</span>
                    <input disabled type="text" name="autoPago" id="autoPago" v-model="Auto.value">
                </label>
            </div>
            <div class="row mt-3">
                <label for="camionPago">
                    <span>Camion:</span>
                    <input disabled type="text" name="camionPago" id="camionPago" v-model="Camion.value">
                </label>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="modifyPayment()">Modificar</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="applyPayment()">Aplicar cambios</button>
                </div>
            </div>
            <hr>
        </div>
        <div class="col-4">
            <h4>Configuracion de precio de Multas</h4>
            <div class="row mt-3">
                <label for="multa">
                    <span>Multa General:</span>
                    <input disabled type="text" name="multa" id="multa" v-model="Multa.value">
                </label>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="modifyFine()">Modificar</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="applyFineMulta()">Aplicar cambios</button>
                </div>
            </div>
            <hr>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router';

export default{
    components:{
    },
    data() {
        return {

            Moto: {
                id: '54f13da9-b8fe-4fff-919f-d295ec4d55f5',
                key: 'MOTO',
                value: ''
            },
            Camion: {
                id: '9407c5f8-5984-4777-aa6c-7b413b7879c3',
                key: 'CAMION',
                value: ''
            },
            Auto: {
                id: 'ffe7fec7-5539-40b9-9926-d868b22159d7',
                key: 'AUTO',
                value: ''
            },
            Multa: {
                id: 'b2f2581e-39ab-42bf-9b15-b377b40dc6de',
                key: 'N/A',
                value: ''
            },
            loading: false
        };
    },
    mounted(){
        this.getValues();
    },
    methods: {
        modifyPayment(){
            document.getElementById('motoPago').disabled = false
            document.getElementById('autoPago').disabled = false
            document.getElementById('camionPago').disabled = false
        },
        modifyFine(){
            document.getElementById('multa').disabled = false
        },
        applyPaymentCamion(){
            this.loading = true
            axios.put("https://localhost:44322/Transito/PutValorTipoVehiculo?idTipoVehiculo=9407c5f8-5984-4777-aa6c-7b413b7879c3&nuevoValor=" + this.Camion.value)
            .then(response=> {
                if(response.status==200) {
                    alert('Monto de Camion Modificado!');
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
        },
        applyPaymentAuto(){
            this.loading = true
            axios.put("https://localhost:44322/Transito/PutValorTipoVehiculo?idTipoVehiculo=ffe7fec7-5539-40b9-9926-d868b22159d7&nuevoValor=" + this.Auto.value)
            .then(response=> {
                if(response.status==200) {
                    alert('Monto de Auto Modificado!');
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
        },
        applyPaymentMoto(){
            this.loading = true
            axios.put("https://localhost:44322/Transito/PutValorTipoVehiculo?idTipoVehiculo=54f13da9-b8fe-4fff-919f-d295ec4d55f5&nuevoValor=" + this.Moto.value)
            .then(response=> {
                if(response.status==200) {
                    alert('Monto de Moto Modificado!');
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
        },
        applyFineMulta(){
            this.loading = true
            axios.put("https://localhost:44322/Transito/PutValorMulta?nuevoValor=" + this.Multa.value)
            .then(response=> {
                if(response.status==200) {
                    alert('Monto de Multa Modificado!');
                }
            })
            .catch(err =>{
                alert(err.Message)
            })
            .finally(data =>{
                this.loading = false
            })
        },
        applyPayment(){
            this.applyPaymentAuto();
            this.applyPaymentCamion();
            this.applyPaymentMoto();
        },
        getValues(){
            this.loading = true
            axios.get("https://localhost:44322/Transito/GetAllMontosDeVehiculosYMulta")
            .then(response=>{
            response.data.forEach((values) => {
                switch(values.tipo){
                    case "AUTO":
                        this.Auto.value = values.valor.toString()
                        console.log(values.valor.toString())
                        break;
                    case "CAMION":
                        this.Camion.value = values.valor.toString()
                        console.log(values.valor.toString())
                        break;
                    case "MOTO":
                        this.Moto.value = values.valor.toString()
                        console.log(values.valor.toString())
                        break;
                    case "N/A":
                        this.Multa.value = values.valor.toString()
                        console.log(values.valor.toString())
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
    },
}
</script>

<style>
.container{
    justify-content: center;
    align-items: center;
}
.row{
    justify-content: center;
}
span{
    margin-right: 5px
}
</style>