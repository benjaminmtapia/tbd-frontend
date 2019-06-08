<template>
  <div>
    <v-container >
      <v-layout wrap="">
        <v-flex class="primary" xs12>
          <Carrusel/>
        </v-flex>

      </v-layout>      
      </v-container>
      <Cards/>
  </div>
</template>


<script>
  import Sentimientos from '../components/Sentimientos'

  export default {
    components: {
      Sentimientos,

    }
  }
</script>
