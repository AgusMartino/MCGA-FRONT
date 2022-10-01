<template>
<div class= "container">
    <div class="col">
        <h3>Listado de informacion de patentes</h3>

        <table class="table">
            <tr>
                <th scope="col">Cantidad de:</th>
                <th scope="col">#</th>
            </tr>
            <tbody id="myTable">
                <dataTable
                    v-for="peaje in peajeJSON"
                    :informacion="peaje.informacion"
                    :document = "peaje.DNI"
                />
        </tbody>

        </table>
    </div>
</div>
</template>

<script>
import dataTable from "../components/dataTablePeaje.vue"
import axios from "axios"
export default{
    components:{
        dataTable,
    },
    data() {
        return {
            peajeJSON: [
                peaje{
                    informacion: "Patentes que pasaron por el peaje"
                    Cantidad: "20"
                },
                peaje{
                    informacion: "Patentes reconocidas"
                    Cantidad: "20"
                },
                peaje{
                    informacion: "Patentes no reconocidas"
                    Cantidad: "20"
                },
                peaje{
                    informacion: "Multas emitidas"
                    Cantidad: "20"
                },
                peaje{
                    informacion: "Solicitudes de pago"
                    Cantidad: "20"
                },
                peaje{
                    informacion: "Total facturado"
                    Cantidad: "20"
                }
            ],
            loading: false,
            nombre: null
        };
    },
</script>

<style>
</style>
