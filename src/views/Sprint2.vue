<template>
    <v-container>
        <v-layout justify-center>
            <v-flex xs6>
            <grafoFonasa/>
            </v-flex>
            <v-flex xs6>
            <grafoIsapre/>
            </v-flex>
            <v-flex xs6>
            <cantidadAfiliados/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import grafoFonasa from '../grafos/grafoFonasa.vue'
import grafoIsapre from '../grafos/grafoIsapre.vue'
import cantidadAfiliados from '../components/cantidadAfiliados.vue'
export default {
    components:{
        grafoFonasa,
        grafoIsapre,
        cantidadAfiliados
    }
}
</script>