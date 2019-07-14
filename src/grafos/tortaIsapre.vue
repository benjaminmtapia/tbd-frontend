<template>
    <div id ="chart">
       <VueApexCharts type=pie :options="chartOptions" :series="series" id="barra"/>
    </div>
</template>


<script>
import VueApexCharts from "vue-apexcharts";
import * as axios from "axios";
export default {
  name: "BarChart",
  components: {
    VueApexCharts
  },
  props: {
    title: String,
    api: String
  },
  data() {
    return {
      series:  [44, 55, 67, 83],
      chartOptions: {
        chart: {
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false
          }
        },
        fill: {
          opacity: 1
        },
        title: {
          text: this.title,
          align: 'center',
          style: {
            fontSize: '24px',
          }
        },
      }
    }
  }
}
</script>