<template>
    <v-container >

    <v-layout wrap justify-center mt-4>
            <v-flex xs7 mt-4 white pa-3 style="background-color:#D4D6FF !important">
                <vs-card actionable class="cardx" >
            <h2 style="text-align:center">Top 5 Usuarios que comentan Isapre</h2>
            <br>
            <p>Mediante un análisis de los usuarios de Twitter que comentan sobre las Isapres, se muestran los 5 más influyentes
            según sus seguidores en un grafo.   </p>
        <grafoIsapre/>
                </vs-card>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-5>

            <v-flex xs7 mt-5 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
                <h2 style="text-align:center;">Top 5 Usuarios que comentan Fonasa</h2>
                <p>
                Aquí se presentan los 5 usuarios más influyentes que comentan sobre Fonasa, según un análisis de tweets recolectados.
                </p>
                <grafoFonasa/>
            </vs-card>
            </v-flex>
        </v-layout>
        <v-layout wrap justify-center mt-4>
          <v-flex xs10 mt-4 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
              <h2 style="text-align:center">Peso del Top 5 Usuarios que comentan Fonasa</h2>
              <br>
              <p>Estos gráficos ilustran mejor el peso que tienen los 5 usuarios más influyentes que comentan
              sobre Fonasa</p>
      
            <v-layout justify-center mt-4>
              <v-flex xs6 mt-4 white mr-2 pa-3>
                <InfUserFvsIBar/>
              </v-flex>
              <v-flex xs5 mt-4 ml-2 white pa-3>
                <InfUserFvsIDonut/>
              </v-flex>
            </v-layout>
          </vs-card>
        </v-flex>
      </v-layout>

        <v-layout wrap justify-center mt-4>
          <v-flex xs10 mt-4 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
              <h2 style="text-align:center">Peso del Top 5 Usuarios que comentan Isapre</h2>
              <br>
              <p>Los siguientes gráficos permiten ver el peso que tienen los usuarios más influyentes que comentan sobre Isapre.</p>
              <v-layout justify-center mt-4>
                <v-flex xs6 mt-4 mr-2 white pa-3>
                  <InfUserPorIBar/>
                </v-flex>
                <v-flex xs5 mt-4 mt-4 white pa-3>
                  <InfUserPorIDonut/>
                </v-flex>
              </v-layout>
            </vs-card>
          </v-flex>
        </v-layout>

        

    </v-container>
</template>


<script>
import InfUserFvsIBar from '../components/InfUserFvsIBar.vue'
import InfUserFvsIDonut from '../components/InfUserFvsIDonut.vue'
import InfUserPorIBar from '../components/InfUserPorIsBar.vue'
import InfUserPorIDonut from '../components/InfUserPorIsDonut.vue'
import grafoFonasa from '../grafos/grafoFonasa.vue'
import grafoIsapre from '../grafos/grafoIsapre.vue'
import tortaIsapre from '../grafos/tortaIsapre.vue'
export default {
    components:{
        grafoFonasa,
        grafoIsapre,
        tortaIsapre,
        InfUserFvsIBar,
        InfUserPorIBar,
        InfUserFvsIDonut,
        InfUserPorIDonut
    }
}
</script>
<style >
.apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {
    justify-content: flex-start;
    width: 170px ;
}
p{
  font-size:13px;
}
</style>