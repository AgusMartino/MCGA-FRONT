<template>
  <div class="container">
    <div class="col">
      <h3>Informacion del peaje</h3>
      <table class="table">
        <tr>
          <th scope="col">Detalle</th>
          <th scope="col">Cantidad</th>
        </tr>
        <tbody id="myTable">
          <tr>
            <td>Total de patentes que pasaron por el peaje</td>
            <td>{{patentenPasaronPeaje}}</td>
          </tr>
          <tr>
            <td>Total de patentes reconocidas</td>
            <td>{{patenteReconocidas}}</td>
          </tr>
          <tr>
            <td>Total de patentes no reconocidas</td>
            <td>{{patentesNoReconocidas}}</td>
          </tr>
          <tr>
            <td>Total de multas emitidas</td>
            <td>{{multasEmitidas}}</td>
          </tr>
          <tr>
            <td>Total de solicitudes de pago emitidas</td>
            <td>{{solicitudesDePago}}</td>
          </tr>
          <tr>
            <td>Total facturado</td>
            <td>{{totalFacturado}}</td>
          </tr>
        </tbody>
      </table>
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
            patentenPasaronPeaje: "500",
            patenteReconocidas: "400",
            patentesNoReconocidas: "100",
            multasEmitidas: "100",
            solicitudesDePago: "400",
            totalFacturado: "$100.000",
            loading: false
        };
    }
    /*
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers(){
            this.loading = true
            axios.get("https://localhost:44398/User/GetAll")
            .then(response=>{
            this.entradasJSON = response.data;
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            })
        }
    },
    computed:{
        userfilter(){
                if(!this.nombre)
                  return this.entradasJSON;
                else
                  return this.entradasJSON.filter((data) => {
                  return !data.Nombre_Usuario.toLowerCase().indexOf((this.nombre.toLowerCase()));
                  })
        }
    }
    */
}
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
}
.col {
  justify-content: center;
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;
}
</style>
