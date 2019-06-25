<template>
  <div>
    <vs-table max-items="10" pagination :data="isapres">
      
      <template slot="thead">
        <vs-col vs-w="5" style="font-weight: bold; font-size: 20px;">
          Fondo
        </vs-col>
        <vs-col vs-w="5" style="font-weight: bold; font-size: 20px;">
          Clinica
        </vs-col>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
        
          <vs-col v-if="data[indextr].clinicasAfiliadas!=null" vs-w="4" :data="data[indextr].idFondo" >
            {{data[indextr].nombre}}
          </vs-col>

          <vs-col v-if="data[indextr].clinicasAfiliadas!=null" vs-w="7" :data="data[indextr].clinicasAfiliadas">
           <li> {{data[indextr].clinicasAfiliadas}}</li>
          </vs-col>

          
        </vs-tr>
      </template>
    </vs-table>


  </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: [],
            isapres: [],
            afiliados: [],
        }  
    },
    methods: {
        
        getDatos(){
          const url = 'http://localhost:8081/fondoDeSalud/getAll';
          axios.get(url).then(response=>{
            this.isapres = response.data;        
          });
          
        },
        getClinica(data){
          var i =0;
          for(i = 0; i<data.length ; i++){
            afiliados[i] = data[i].clinicasAfiliadas.split(",");
          }
        }
    },
    async created() {
        this.getDatos();
        
    },
}
</script>

<style lang="stylus">
.con-expand-users
  .con-btns-user
    display flex
    padding 10px
    padding-bottom 0px
    align-items center
    justify-content space-between
    .con-userx
      display flex
      align-items center
      justify-content flex-start
  .list-icon
    i
      font-size .9rem !important
.vs-table--tbody-table tr {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
}
.vs-col{
  padding-top:10px !important;
}
.vs-tabs--content {
  align:center;
  width:800px;
  float:center;
  margin: 60px auto;
  max-width: 1024px;
}
</style>
