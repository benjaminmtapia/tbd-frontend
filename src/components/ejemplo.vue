<template>
  <div class="container">
    <chartjs-bar
      v-if="loaded"
      v-bind:labels="this.chartdata.labels"
      v-bind:datasets="this.chartdata.datasets"
      
      />
  </div>
</template>

<script>
import LineChart from '../graficas/ejemplo.vue'
import axios from 'axios'
export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata:{
        labels:['hola','bb','como','estas'],
        datasets:[{
            data:[10,1,2,3]
        }]
    }
  }),
  async mounted () {
    this.loaded = false
    try {
      const { userlist } = axios.get('http://localhost:3030/isapres').
      then(response=>{
          this.chartdata=response.data;
      });
      
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
