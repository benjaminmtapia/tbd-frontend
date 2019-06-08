<template>
    <div>
    <canvas id="graficoAfiliados" width="300" height="300"></canvas>
    </div>
</template>

<script>
import cantidadAfiliados from '../graficas/cantidadAfiliados.js';

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
            afiliados: cantidadAfiliados,
        }
    },
    mounted() {
        this.createChart('graficoAfiliados', this.afiliados);
    },
}
</script>