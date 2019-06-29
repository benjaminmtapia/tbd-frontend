<template>
    <div>
        <d3-network :net-nodes="nodes" :net-links="links" :options="options" />
    </div>
</template>

<script>
import D3Network from 'vue-d3-network';
export default {
    components: {
    D3Network
  },
    data() {
        return {
         nodes: [
        { id: 1, name: 'Usuario 1',_color:'red',_size:50 },
        { id: 2, name: 'Usuario 2',_color:'yellow',_size:10 },
        { id: 3, name: 'Usuario 3', _color:' #f7dc6f ',_size:20 },
        { id: 4, name: 'Usuario 4',_color:'green', _size:60, },
        { id: 5, name: 'Usuario 5', _color: 'white', _size:80 },
        { id: 6, name: 'Isapre', _color:'black',_size:100 },

      ],
      links: [
        { sid: 1, tid: 6, _color:'red' },
        { sid: 2, tid: 6, _color:'f0f' },
        { sid: 3, tid: 6,_color:'rebeccapurple' },
        { sid: 4, tid: 6 },
        { sid: 5, tid: 6 },
      ],
      options:
      {
        force: 10000,
        nodeSize: 20,
        nodeLabels: true,
        linkWidth:5
      },
        }
    },
    
}
</script>
<style src="vue-d3-network/dist/vue-d3-network.css"></style>