<template>
    <v-container>
        <v-layout justify-center>
            <v-flex xs6>
        <cantidadAfiliados/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import cantidadAfiliados from '../components/cantidadAfiliados.vue'
export default {
    components:{
        cantidadAfiliados
    }
}
</script>