<template>
<v-layout justify-center>
<v-flex xs3 ma-4>
          <vs-card actionable class="cardx" style="background-color:#D4D6FF !important">
        <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-5"
          max-width="600"
        >
          
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
          
            <h4 class="display-1 font-weight-light orange--text mb-2">Acerca de:</h4>
            <div style="font-size:14px;">
          <p>Esta pagina contiene el desarrollo del proyecto semestral de Taller de Bases de Datos
             de la Universidad de Santiago de Chile en el primer semestre del año 2019.</p>
          <p>El equipo de trabajo está compuesto por:</p>
          <ul>
            <li> Diego Águila </li>
            <li> Nicolás Cárcamo</li>
            <li> Franco Labra </li>
            <li> Benjamín Muñoz</li>
            <li> Alexander Palma</li>
          </ul>
            </div>
          </v-card-text>
        </v-card>
        </v-hover>
          </vs-card>
      </v-flex>
</v-layout>
</template>
<script>
  import Hover from '../components/Hovers.vue'
  import Sprint1 from '../views/Sprint1.vue'
  export default {
    components: {
      Hover,
      Sprint1

    }
  }
</script>