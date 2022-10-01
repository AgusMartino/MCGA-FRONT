<template>
        <tr>
            <td scope="row">{{informacion}}</td>
            <td>{{Cantidad}}</td>
        </tr>
</template>

<script>
export default {
  props: {
    informacion: String,
    Cantidad: String,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>