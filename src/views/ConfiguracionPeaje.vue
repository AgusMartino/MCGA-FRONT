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
            <h4>Montos a pagar por categoria o tipo de vehiculo:</h4>
            <div class="row mt-3">
                <label for="motoPago">
                    <span>Moto:</span>
                    <input type="text" name="motoPago" id="motoPago" v-model="TipoPeajePago.moto">
                </label>
            </div>
            <div class="row mt-3">
                <label for="autoPago">
                    <span>Auto:</span>
                    <input type="text" name="autoPago" id="autoPago" v-model="TipoPeajePago.auto">
                </label>
            </div>
            <div class="row mt-3">
                <label for="camionPago">
                    <span>Camion:</span>
                    <input type="text" name="camionPago" id="camionPago" v-model="TipoPeajePago.camion">
                </label>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="">Modificar</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="">Aplicar cambios</button>
                </div>
            </div>
            <hr>
        </div>
        <div class="col-4">
            <h4>Multas por categoria o tipo de vehiculo:</h4>
            <div class="row mt-3">
                <label for="motoMulta">
                    <span>Moto:</span>
                    <input type="text" name="motoMulta" id="motoMulta" v-model="TipoPeajeMulta.moto">
                </label>
            </div>
            <div class="row mt-3">
                <label for="autoMulta">
                    <span>Auto:</span>
                    <input type="text" name="autoMulta" id="autoMulta" v-model="TipoPeajeMulta.auto">
                </label>
            </div>
            <div class="row mt-3">
                <label for="camionMulta">
                    <span>Camion:</span>
                    <input type="text" name="camionMulta" id="camionMulta" v-model="TipoPeajeMulta.camion">
                </label>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="">Modificar</button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary" v-on:click="">Aplicar cambios</button>
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
            TipoPeajeMulta:{
                    auto: '600',
                    camion: '700',
                    moto: '1000'
                }
        };
    },
    /*
    mounted(){
        this.getUsers()
    },
    */
    methods: {
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
    height: 50px;
    align-items: center;
    justify-content: center;
}
span{
    margin-right: 5px
}
</style>