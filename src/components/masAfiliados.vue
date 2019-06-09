<template>
    <div>
    <canvas id="masComentadas"  width="400" height="300"></canvas>    
    </div>
</template>

<script>
import masComentadas from '../graficas/masAfiliados.js';
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
            masComentadas: masComentadas,
            
        }
    },
    mounted() {
        //poner aqui en axios this.data y meterlo en el metodo createChart
        this.createChart('masComentadas', this.masComentadas);
    },
}
</script>