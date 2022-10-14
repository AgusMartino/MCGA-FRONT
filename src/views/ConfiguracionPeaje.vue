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
                    <input disabled type="text" name="motoPago" id="motoPago" v-model="TipoPeajePago.moto">
                </label>
            </div>
            <div class="row mt-3">
                <label for="autoPago">
                    <span>Auto:</span>
                    <input disabled type="text" name="autoPago" id="autoPago" v-model="TipoPeajePago.auto">
                </label>
            </div>
            <div class="row mt-3">
                <label for="camionPago">
                    <span>Camion:</span>
                    <input disabled type="text" name="camionPago" id="camionPago" v-model="TipoPeajePago.camion">
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
                    <span>Moto:</span>
                    <input disabled type="text" name="multa" id="multa" v-model="TipoPeajeMulta">
                </label>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="modifyFine()">Modificar</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="applyFine()">Aplicar cambios</button>
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
            loading: false,
            TipoPeajePago:{
                    auto: '400',
                    camion: '400',
                    moto: '400'
                },
            TipoPeajeMulta: '2000'
        };
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
        applyPayment(){
            const auto = document.getElementById('autoPago')
            const moto = document.getElementById('motoPago')
            const camion = document.getElementById('camionPago')
            this.loading = true
            this.TipoPeajePago.auto = auto.value
            this.TipoPeajePago.moto = moto.value
            this.TipoPeajePago.camion = camion.value
            document.getElementById('motoPago').disabled = true
            document.getElementById('autoPago').disabled = true
            document.getElementById('camionPago').disabled = true
            this.loading = false
            console.log(auto.value)
            console.log(moto.value)
            console.log(camion.value)
        },
        applyFine(){
            const multa = document.getElementById('multa')
            this.loading = true
            this.TipoPeajeMulta = multa.value
            document.getElementById('multa').disabled = true
            this.loading = false
            console.log(multa.value)
        }
        /*
        getUsers(){
            this.loading = true
            axios.get("https://localhost:44398/User/GetAll")
            .then(response=>{
            response.data.forEach((user) => {
                if (user.Id_usuario == this.id){
                    this.user = user
                }
            });
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            })
        },

        userUpdate(){
                this.loading = true
                axios.put("https://localhost:44398/User/Update", this.user)
                .then(response=> {
                    if(response.status==200) {
                    alert('Usuario modificado con exito!');
                    }
                })
                .catch(err =>{
                    alert(err.Message)
                })
                .finally(data =>{
                this.loading = false
                })
            }
        },
        */
    }
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