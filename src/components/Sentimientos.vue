<template>
    <div>
    <canvas id="grafica1"  width="500" height="200"></canvas>    
    </div>
</template>

<script>
import graficaSentimientos from '../graficas/sentimientos.js';
import graficaCircular from '../graficas/graficaCircular.js';
export default {
    methods: {
            createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
         }
    },
    data() {
        return {
            graficaSentimientos: graficaSentimientos,
            graficaCircular: graficaCircular,
            drawer:false
        }
    },
    mounted() {
        this.createChart('grafica1', this.graficaSentimientos);
    },
}
</script>