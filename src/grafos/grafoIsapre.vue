<template>
    <div>
    
        <d3-network :net-nodes="nodes" :net-links="links" :options="options" />
    </div>
</template>

<script>
import D3Network from 'vue-d3-network';
import axios from 'axios';
export default {
    components: {
    D3Network
  },  
    data() {
        return {
          dataNeeded:1,
          actualdata:0,
          data:[],
         nodes: [],
      links: [],
      options:
      {
        force: 10000,
        nodeSize: 20,
        nodeLabels: true,
        linkWidth:5
      },
        }
    },
    methods: {
      setNodes(data){
        let i = 0;
         data.forEach(element=>{
           if(data[i].nombre != "Isapre"){
            this.nodes.push({
            id: i,
            name: data[i].name,
            _color:'#66CABB',
            _size: data[i].followersCount*0.001
          });
          }
          else{
            this.nodes.push({
              id: i,
              name: data[i].name,
              _color: 'FF7C00',
              _size:80,
            });
          }
          i++;
         });
         this.nodes.push({
           id:5,
           name: 'Isapre',
         })
         
      },
      setLinks(data){
        var i =0;
        data.forEach(element=>{
          this.links.push({
            sid: i, tid: 5, _color:'red'
          });
          i++;
        })
      }
    },
    created() {
      const url = 'http://localhost:8081/neo/fondo/Isapre/5';
      axios.get(url).then((response)=>{
        this.data = response.data;
        this.actualdata = 0;
        console.log(this.data);
        
        this.actualdata =1;
      });
    },
    watch: {
      actualdata: function(value){
        if(value == this.dataNeeded){
        this.setNodes(this.data);
        this.setLinks(this.data);
        }
      }
    },
}
</script>
<style src="vue-d3-network/dist/vue-d3-network.css"></style>