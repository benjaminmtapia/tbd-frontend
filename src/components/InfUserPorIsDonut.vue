<template>
  <div align="center">
    <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
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
      const url = 'http://localhost:3000/usuario';
      axios.get(url).then((data) => {
          this.usuarios = data.data;
          for(var i=0;i<5;i++){
            this.series.push(parseInt(this.usuarios[i].seguidores));
            this.options.labels.push(this.usuarios[i].nombre);
          }
        });
    },
  },
  mounted() {
    this.getUsuarios();
  },
}
</script>
