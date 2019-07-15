<template>
    <v-container >
        <v-layout wrap justify-center mt-4>
          <v-flex xs8 mt-4 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
              <h2 style="text-align:center">Top 5 Usuarios que comentan entre Fonasa e Isapre</h2>
              <br>
              <p>Mediante un análisis de los usuarios de Twitter que comentan entre Fonasa e Isapres, se muestran los 5 más influyentes
            según sus seguidores.</p>
            <v-layout justify-center mt-4>
              <v-flex xs8 mt-4 white pa-3>
                <InfUserFvsIBar/>
              </v-flex>
              <v-flex xs8 mt-4 white pa-3>
                <InfUserFvsIDonut/>
              </v-flex>
            </v-layout>
          </vs-card>
        </v-flex>
      </v-layout>

        <v-layout wrap justify-center mt-4>
          <v-flex xs8 mt-4 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
              <h2 style="text-align:center">Top 5 Usuarios que comentan por cada Isapre</h2>
              <br>
              <p>Mediante un análisis de los usuarios de Twitter que comentan por cada Isapre, se muestran los 5 más influyentes
              según sus seguidores.</p>
              <v-layout justify-center mt-4>
                <v-flex xs8 mt-4 white pa-3>
                  <InfUserPorIBar/>
                </v-flex>
                <v-flex xs8 mt-4 white pa-3>
                  <InfUserPorIDonut/>
                </v-flex>
              </v-layout>
            </vs-card>
          </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-4>

            <v-flex xs8 mt-4 white pa-3 style="background-color:#D4D6FF !important">
                <vs-card actionable class="cardx" >
            <h2 style="text-align:center">Top 5 Usuarios que comentan Isapre</h2>
            <br>
            <p>Mediante un análisis de los usuarios de Twitter que comentan sobre las Isapres, se muestran los 5 más influyentes
            según sus seguidores.   </p>
        <grafoIsapre/>
                </vs-card>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-5>

            <v-flex xs6 mt-5 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
                <h2 style="text-align:center;">Cantidad de Afiliados</h2>
                <p>
                El siguiente gráfico demuestra la brecha que existe entre la cantidad de Afiliados que posee una
                Isapre v/s los que poseen FONASA
                </p>
                <grafoFonasa/>
            </vs-card>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-5>

            <v-flex xs6 mt-5 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
                <h2 style="text-align:center;">Cantidad de Afiliados por Isapre</h2>
                <p>Acá se muestra la cantidad de afiliados para cada Isapre, según se ha comentado
                en Twitter</p>
                <tortaIsapre/>
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
