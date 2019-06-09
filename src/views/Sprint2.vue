<template>
    <v-container>
        <v-layout justify-center>
            <v-flex xs6>
            <Sentimientos/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import cantidadAfiliados from '../components/cantidadAfiliados.vue'
import Sentimientos from '../components/Sentimientos.vue'
export default {
    components:{
        cantidadAfiliados,Sentimientos
    }
}
</script>