<template>
    <v-container >
        <v-layout wrap justify-center mt-4>
        
            <v-flex xs8 mt-4 white pa-3>
            <h2 style="text-align:center">Atención de Isapres según Usuarios de Twitter</h2>
            <br>
            <p>A partir de un análisis de sentimientos de los Tweets de diversos usuarios, se presenta
            cómo perciben ellos la atención de salud gracias a los distintos Fondos de Salud incluído Fonasa </p>    
        <Sentimientos/>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-5>
        
            <v-flex xs6 mt-5 white pa-3>
            
                <cantidadAfiliados/>
            </v-flex>
        </v-layout>
        
         <v-layout wrap justify-center mt-5>
            <v-flex xs6 mt-5 white pa-3>
                <h2 style="text-align:center;">Fondos de Salud con mayor cantidad de Afiliados </h2>
                <masComentadas/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Sentimientos from '../components/Sentimientos.vue'
import cantidadAfiliados from '../components/cantidadAfiliados.vue';
import masComentadas from '../components/masAfiliados.vue';
export default {
    components:{
        Sentimientos,
        cantidadAfiliados,
        masComentadas
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