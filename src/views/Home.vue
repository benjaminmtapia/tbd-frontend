<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs3 ma-4>
        <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-5"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://www.blog.saludonline.cl/wp-content/uploads/2016/05/Cobertura-GES-Isapre-565x270.gif"
          >
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
          
            <h4 class="display-1 font-weight-light orange--text mb-2">¿Qué es un Fondo de Salud?</h4>
            <div class="font-weight-light title mb-2" style="font-size:13px;">
              Our Vintage kitchen utensils delight any chef.<br>
              Made of bamboo by hand
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
      </v-flex>
      <v-flex xs3 ma-4>
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-5"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://factorialhr.es/wp-content/uploads/2017/07/05181248/cheque-gourmet-tarjeta-beneficio-retribucion-flexible.jpg"
          >
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
          
            <h4 class="display-1 font-weight-light orange--text mb-2">¿Cómo Funciona?</h4>
            <div style="font-size:14px;">
              <p>En el caso de estar inscrito en una ISAPRE, firmas un contrato donde
              eliges un plan, y te comprometes a pagar una cotización mensual que se descontará
              automáticamente de tu sueldo. Una vez te atiendas en una clínica, ellos emplearán el descuento
              que tiene tu plan aunque este depende de la cobertura que tiene.
              <br><br>
              Por otro lado, si estás en FONASA, se te asigna un grupo
              a partir de tus datos socioeconómicos y se te cobra una comisión del 7% mensual.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
      </v-flex>
      <v-flex xs3 ma-4>
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-5"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://hpf-happify-marty-prod-user-uploads.happify.com/cms_uploads/en_US/img/happifiers/healthhappiness_OG.png"
          >
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
          
            <h4 class="display-1 font-weight-light orange--text mb-2">¿Qué beneficios trae?</h4>
            <div style="font-size:14px;">
              <p>El tener un fondo de salud te asegura una mejor atención tanto en clínicas como hospitales.
              <br>
              Además de ofrecerte tanto planes de salud en caso de que tengas una enfermedad o tratamiento intensivo.
              Así podrás cuidar de tu salud sin problemas!. </p>
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
      </v-flex>
    </v-layout>
  </v-container>

</template>


<script>
  import Hover from '../components/Hovers.vue'

  export default {
    components: {
      Hover,

    }
  }
</script>