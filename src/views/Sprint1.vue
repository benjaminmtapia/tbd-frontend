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
        
        <v-layout wrap justify-center mt-5>
            
            <v-flex xs6 mt-5 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
                <h2 style="text-align:center;">Cantidad de Afiliados</h2>
                <p>
                El siguiente gráfico demuestra la brecha que existe entre la cantidad de Afiliados que posee una 
                Isapre v/s los que poseen FONASA
                </p>
                <cantidadAfiliados/>
            </vs-card>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-5>
            
            <v-flex xs6 mt-5 white pa-3 style="background-color:#D4D6FF !important">
            <vs-card actionable class="cardx" >
                <h2 style="text-align:center;">Cantidad de Afiliados por Isapre</h2>
                <p>Acá se muestra la cantidad de afiliados para cada Isapre, según se ha comentado
                en Twitter</p>
                <cantidadAfiliadosIsapres/>
            </vs-card>
            </v-flex>
        </v-layout>
        

        <v-layout wrap justify-center mt-5>
            <v-flex xs8 mt-5 white pa-3>
            <h2 style="text-align:center;">Clinicas Afiliadas a cada fondo de salud</h2>
            <p style="text-align:center;">Esta lista contiene las clínicas afiliadas a cada fondo de salud</p>
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
import clinicasAfiliadas from '../components/clinicasAfiliadas.vue'
export default {
    components:{
        Sentimientos,
        cantidadAfiliados,
        masComentadas,
        cantidadAfiliadosIsapres,
        clinicasAfiliadas
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
</style>