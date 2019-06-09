<template>
    <div>
    <canvas id="grafica1"  width="500" height="200"></canvas>   
    {{this.labels}} 
    </div>
</template>

<script>
import graficaSentimientos from '../graficas/sentimientos.js';
import graficaCircular from '../graficas/graficaCircular.js';
import axios from 'axios';
export default {
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
        getLabels(fondos) {
            var labels = [];
            fondos.forEach(fondo => {
                labels.push(fondo.nombre);
            });
            console.log("labels : " +labels);
            return labels;
        },
    },
    data() {
        return {
            acuerdo:[],
            desacuerdo:[],
            data:[],
            labels:[],
            chartData:{
                type:'bar',
                data:{
                
                    labels: [],
                    datasets: [
                        {
                        label: 'Aprobacion',
                        data: [],
                        backgroundColor: [
                        ],
                        borderWidth: 0
                        },
                        {
                        label: 'Comentarios Negativos',
                        data: [30, 47, 30, 30],
                        backgroundColor: [
                        ],
                        borderWidth: 0
                        }
                    ]
                    },
                    options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            padding: 25,
                        }
                        }]
                    }
                    }
                                
                            }
                        }
    },
    created() {
        var url = 'http://localhost:8081/fondoDeSaluds'; 
        axios.get(url).then(response=>{
            this.data =response.data;
        });
        this.labels = this.getLabels(this.data);

    },
    mounted() {
      // this.labels = getLabels(data);
       
    },
}
</script>