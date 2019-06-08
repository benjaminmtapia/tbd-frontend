<template>
    <v-container>
        <v-layout justify-center>
            <v-flex xs8>
        <Sentimientos/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Sentimientos from '../components/Sentimientos.vue'
export default {
    components:{
        Sentimientos
    }
}
</script>