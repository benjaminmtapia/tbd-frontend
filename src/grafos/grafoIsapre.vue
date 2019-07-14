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
            name: data[i].nombre,
            _color:'#66CABB',
            _size: 100
          });
          }
          else{
            this.nodes.push({
              id: i,
              name: data[i].nombre,
              _color: 'FF7C00',
              _size:50,
            });
          }
          i++;
         });
         
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
      const url = 'http://localhost:3000/usuario';
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