<template>
  <div align="center">
    <apexchart width="400" type="pie" :options="options" :series="series"></apexchart>
  </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts';
Vue.component('apexchart', VueApexCharts);
export default {
  data () {
    return {
      usuarios: [],
      options: {
        labels: []
      },
      series: [],
    }
  },
  methods: {
    getUsuarios(){
      const url = 'http://localhost:8081/neo/fondo/Isapre/5';
      axios.get(url).then((data) => {
          this.usuarios = data.data;
          for(var i=0;i<5;i++){
            this.series.push(parseInt(this.usuarios[i].followersCount));
            this.options.labels.push(this.usuarios[i].name);
          }
        });
    },
  },
  mounted() {
    this.getUsuarios();
  },
}
</script>
