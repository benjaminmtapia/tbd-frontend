<template>
    <v-container >
        <v-layout wrap justify-center mt-4>
        
            <v-flex xs8 mt-4 white pa-3 style="background-color:#D4D6FF !important">
                <vs-card actionable class="cardx" >
            <h2 style="text-align:center">Atención de Isapres según Usuarios de Twitter</h2>
            <br>
            <p>A partir de un análisis de sentimientos de los Tweets de diversos usuarios, se presenta
            cómo perciben ellos la atención de salud gracias a los distintos Fondos de Salud incluído Fonasa </p>    
        <Sentimientos/>
                </vs-card>
            </v-flex>
        </v-layout>

         <v-layout wrap justify-center mt-4>
        
            <v-flex xs5 mt-4 white mr-4 pa-3 style="background-color:#D4D6FF !important">
                <vs-card actionable class="cardx" >
            <h2 style="text-align:center">Sentimientos de Usuarios respecto a Fonasa</h2>
            <br>
            <p>A partir de un análisis de sentimientos de los Tweets de diversos usuarios, se presenta
            cómo perciben ellos la atención de salud gracias a Fonasa </p>    
        <sentimientosFonasa/>
                </vs-card>
            </v-flex>
            <v-flex xs5 mt-4 white pa-3 style="background-color:#D4D6FF !important">
                <vs-card actionable class="cardx" >
            <h2 style="text-align:center">Sentimientos de Usuarios respecto a Isapres</h2>
            <br>
            <p>Se analizaron los Tweets de diversos usuarios para ver como ellos se sentían al respecto sobre la atención
            en los sistemas de salud con las Isapres </p>    
        <sentimientosIsapre/>
                </vs-card>
            </v-flex>
        </v-layout>

        
        <v-layout wrap justify-center mt-5>
            
            <v-flex xs7 mt-5 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
                <h2 style="text-align:center;">Cantidad de Afiliados</h2>
                <p style="text-algin:center;">Este gráfico permite ver la comparativa del porcentaje de usuarios 
                entre Isapre y Fonasa</p>
                <cantidadAfiliados/>
            </vs-card>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-5>
            
            <v-flex xs8 mt-5 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
                <h2 style="text-align:center;">Cantidad de Afiliados por Isapre</h2>
                <p>De los datos obtenidos, aquí se presenta cuantos afiliados hay por cada Isapre</p>
                <cantidadAfiliadosIsapres/>
            </vs-card>
            </v-flex>
        </v-layout>
        
         <v-layout wrap justify-center mt-5>
            <v-flex xs7 mt-5 white pa-3 >
            <h2 style="text-align:center;" >Clinicas Afiliadas a cada Isapre</h2>
            <p style="text-align:center;">Esta tabla contiene la lista de clínicas afiliadas a las distintas Isapres</p>
                <clinicasAfiliadas/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Sentimientos from '../components/Sentimientos.vue'
import cantidadAfiliados from '../components/cantidadAfiliados.vue';
import masComentadas from '../components/masAfiliados.vue';
import cantidadAfiliadosIsapres from '../components/cantidadAfiliadosIsapres.vue';
import clinicasAfiliadas from '../components/clinicasAfiliadas.vue';
import sentimientosFonasa from '../components/sentimientosFonasa.vue';
import sentimientosIsapre from '../components/sentimientosIsapre.vue';
export default {
    components:{
        Sentimientos,
        cantidadAfiliados,
        masComentadas,
        cantidadAfiliadosIsapres,
        clinicasAfiliadas,
        sentimientosFonasa,
        sentimientosIsapre
    }
}
</script>

<style scope>
.white{
    border-radius:25px !important;
}
h2{
    color:#757575;
}
p{
    font-size:13px;
}
</style>