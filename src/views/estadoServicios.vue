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
                    <td><button type="button" class="btn btn-success">Levantar servicio</button></td>
                    <td><button type="button" class="btn btn-danger">Bajar servicio</button></td>
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
                    <td><button type="button" class="btn btn-success">Levantar servicio</button></td>
                    <td><button type="button" class="btn btn-danger">Bajar servicio</button></td>
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
                    <td><button type="button" class="btn btn-success">Levantar servicio</button></td>
                    <td><button type="button" class="btn btn-danger">Bajar servicio</button></td>
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
import dataTable from "../components/dataTablePrivilege.vue"
import axios from "axios"
export default{
    components:{
        dataTable
    },
    data() {
        return {
            entradasJSON: [],
            servicioReconocimiento: true,
            servicioPagos: true,
            servicioMultas: true,
            loading: false
        };
    }
    /*
    mounted() {
        this.getPrivilegies();
    },
    methods: {
        getPrivilegies(){
            this.loading = true
            axios.get("https://localhost:44398/Permission/GetAll")
            .then(response=>{
            this.entradasJSON = response.data.filter((privilege) => {
                return privilege.Estado != false
            });
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            })
        },
        CreatePrivilege(){
            this.loading = true
            axios.post("https://localhost:44398/Permission/Add", this.newPrivilege)
            .then(response=> {
                if(response.status==200) {
                alert('El nuevo privilegio fue ingresado correctamente');
                }
            })
            .catch(err =>{
                alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            })
        }
    },
    */
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