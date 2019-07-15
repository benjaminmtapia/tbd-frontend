<template>
  <div align="center">
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
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
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: []
        }
      },
      series: [{
        name: 'Influencia',
        data: []
      }]
    }
  },
  methods: {
    getUsuarios(){
      const url = 'http://localhost:3000/usuario';
      axios.get(url).then((data) => {
          this.usuarios = data.data;
          for(var i=0;i<5;i++){
            this.options.xaxis.categories.push(this.usuarios[i].nombre);
            this.series[0].data.push(this.usuarios[i].seguidores);
          }
        });
    },
  },
  mounted() {
    this.getUsuarios();
  },
}
</script>
