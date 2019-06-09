<template>
  <div class="container">
    <bar-chart
      v-if="loaded"
      :chartdata="chartdata"
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
