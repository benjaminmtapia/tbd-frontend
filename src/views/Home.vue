<template>
  <div>
    <v-container >
      <v-layout wrap="">
        <v-flex class="primary" xs12>
          <Carrusel/>
        </v-flex>

      </v-layout>

      <v-layout mt-5 justify-center>
      <v-flex  xs6>
          <Sentimientos/>
      </v-flex>
      </v-layout>
      </v-container>
  </div>
</template>


<script>
  import Sentimientos from '../components/Sentimientos'
  import Carrusel from '../components/PasaFotos'
  export default {
    components: {
      Sentimientos,
      Carrusel

    }
  }
</script>
