<template>
    <div>
    <div class="title">Analizador de Sentimientos </div>
    <p>La gráfica muestra según datos extraídos de twitter, el porcentaje de acuerdo y desacuerdo de
    los usuarios respecto al sistema de Isapres del país </p>
        <chartjs-pie v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-pie>
    </div>
</template>
<script>
export default {
    data(){
        return{
            labels:["Acuerdo","Desacuerdo"],
            datasets:[
                {
                    data: [0.3,0.7],
                    backgroundColor:["Red","Yellow"],
                     
                }
            ],
            option:{
                title:{
                    display: true,
                    position: "bottom",
                    test: "Fruits",
                }
            },
            
        };
    }
};
</script>

<style scope>
.title{
    font-size:40px;
    margin-bottom: 10px;
    text-align: center;

}

</style>
