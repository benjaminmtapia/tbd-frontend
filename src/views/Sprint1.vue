<template>
    <v-container >
        <v-layout wrap justify-center mt-4>
        <h2>Atención de Isapres según Usuarios de Twitter</h2>
            <v-flex xs8 mt-4>
        <Sentimientos/>
            </v-flex>
        </v-layout>

        <v-layout wrap justify-center mt-5>
        <h2>Indices de Aprobación y Desaprobación de Isapres</h2>
            <v-flex xs8 mt-5>
            
                <cantidadAfiliados/>
            </v-flex>
        </v-layout>
        
         <v-layout wrap justify-center mt-5>
        <h2>Mas comentadas</h2>
            <v-flex xs6 mt-5>
            
                <masComentadas/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Sentimientos from '../components/Sentimientos.vue'
import cantidadAfiliados from '../components/cantidadAfiliados.vue';
import masComentadas from '../components/masComentadas.vue';
export default {
    components:{
        Sentimientos,
        cantidadAfiliados,
        masComentadas
    }
}
</script>