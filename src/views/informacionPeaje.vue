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
            <td>{{transitoTotal}}</td>
          </tr>
          <tr>
            <td>Total de patentes reconocidas</td>
            <td>{{patentesReconocidas}}</td>
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
            EntradaTransitoTotal: [],
            transitoTotal: "",
            EntradaPatentesReconocidas: [],
            patentesReconocidas: "",
            EntradaPatentesNoReconocidas: [],
            patentesNoReconocidas: "",
            EntradaTotalFacturado: {},
            totalFacturado: "",
            EntradaMultasEmitidas: [],
            multasEmitidas: "",
            EntradaSolicitudDePagosEmitidos: [],
            solicitudesDePago: "",
            loading: false
        };
    },
    mounted() {
        this.GetTransitoTotal();
        this.GetPatentesReconocidas();
        this.GetPatentesNoReconocidas();
        this.GetTotalFacturado();
        this.GetPagosEmitidos();
        this.GetMultasEmitidas();
    },
    methods: {
        GetTransitoTotal(){
            this.loading = true
            axios.get("https://localhost:44322/Transito/GetTransitoTotal")
            .then(response=>{
            this.EntradaTransitoTotal = response.data;
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            this.transitoTotal = this.EntradaTransitoTotal.length.toString()
            console.log(this.EntradaTransitoTotal.length.toString())
            })
        },
        GetPatentesReconocidas(){
            this.loading = true
            axios.get("https://localhost:44322/Transito/GetCantidadVehiculosReconocidos")
            .then(response=>{
            this.EntradaPatentesReconocidas = response.data;
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            this.patentesReconocidas = this.EntradaPatentesReconocidas.cantidadVehiculosReconocidos.toString()
            console.log(this.EntradaPatentesReconocidas.cantidadVehiculosReconocidos.toString())
            })
        },
        GetPatentesNoReconocidas(){
            this.loading = true
            axios.get("https://localhost:44322/Transito/GetCantidadVehiculosNoReconocidos")
            .then(response=>{
            this.EntradaPatentesNoReconocidas = response.data;
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            this.patentesNoReconocidas = this.EntradaPatentesNoReconocidas.cantidadVehiculosNoReconocidos.toString()
            console.log(this.EntradaPatentesNoReconocidas.cantidadVehiculosNoReconocidos.toString())
            })
        },
        GetTotalFacturado(){
            this.loading = true
            axios.get("https://localhost:44322/Transito/GetTotalFacturado")
            .then(response=>{
            this.EntradaTotalFacturado = response.data;
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            this.totalFacturado = this.EntradaTotalFacturado.totalFacturadoMonto
            console.log(this.EntradaTotalFacturado)
            })
        },
        GetMultasEmitidas(){
            this.loading = true
            axios.get("https://localhost:44322/Transito/GetMultasEmitidas")
            .then(response=>{
            this.EntradaMultasEmitidas = response.data;
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            this.multasEmitidas = this.EntradaMultasEmitidas.length.toString()
            console.log(this.EntradaMultasEmitidas.length.toString())
            })
        },
        GetPagosEmitidos(){
            this.loading = true
            axios.get("https://localhost:44322/Transito/GetPagosEmitidos")
            .then(response=>{
            this.EntradaSolicitudDePagosEmitidos = response.data;
            })
            .catch(err =>{
            alert(err.data)
            })
            .finally(data =>{
            this.loading = false
            this.solicitudesDePago = this.EntradaSolicitudDePagosEmitidos.length.toString()
            console.log(this.EntradaSolicitudDePagosEmitidos.length.toString())
            })
        }

    }
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
