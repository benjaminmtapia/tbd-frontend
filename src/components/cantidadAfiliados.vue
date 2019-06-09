<template>
    <div>
    <canvas id="graficoAfiliados" width="300" height="200" v-bind:data="this.chartData"></canvas>
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
            chartData:{
                labels:['fonasa2','isapre1','isapre4','isapre3'],
                datasets:[
                    {
                        data:[1,2,3,4,5]
                    }
                ],
                options:{

                }
            }
        }
    },
    mounted() {
        this.createChart('graficoAfiliados', this.afiliados);
        this.afiliados.type='donut';
    },
}
</script>