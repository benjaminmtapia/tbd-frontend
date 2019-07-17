<template>

  <v-app>
    <v-toolbar app class="navbar">
      <v-toolbar-side-icon title="Menú" @click="drawer=!drawer"></v-toolbar-side-icon>
      <h3> Fondos de Salud </h3>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer class="about" mt-5 app temporary v-model="drawer" style="background-color: #D4D6FF !important">
      <div style="margin-top:35px;">
       <v-toolbar-side-icon title="Menú" @click="drawer=!drawer"></v-toolbar-side-icon>
       <br>
    <v-container>
      <router-link to="/"><v-btn class="text-left" color="#000000" flat round style="min-width: 100%;"><v-icon>home</v-icon>Home</v-btn></router-link><br>
      <router-link to="/about"><v-btn color="#000000" flat round style="min-width: 100%;"><v-icon>group</v-icon>About</v-btn></router-link><br>
      <router-link to="/sprint1"><v-btn color="#000000" flat round style="min-width: 100%;"><v-icon>sms_failed</v-icon>Indexación de Tweets</v-btn></router-link><br>
      <router-link to="/sprint2"><v-btn color="#000000" flat round style="min-width: 100%;"><v-icon>person</v-icon>Indexación de Usuarios</v-btn></router-link><br>
      <router-link to="/sprint3"><v-btn color="#000000" flat round style="min-width: 100%;"><v-icon>public</v-icon>Geolocalización de Tweets</v-btn></router-link><br>
      </v-container>
      </div>
    </v-navigation-drawer>

    <v-content> <router-view/>

    </v-content>
  </v-app>
</template>
<script>
import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(Vuesax)

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer:false
    }
  }
}
</script>
<style scope>
#app{
  background-color: #FAFAFA !important;
}
.about{
  padding-top: 30px;
  margin-top:30px;
  text-align: center;
  color: #aaa;
  padding:5px;
  background-color: #eee !important;
}
.about a{
  color:#2D86CE;
  font-family: calibri;
  font-size: 13px;
  text-decoration: none;
  margin-top:5px;
}
.navbar {
 background-color: #9CBAFF !important;
 font-family: Arial;
 font-size:15px;
 color: #696969;
}
h3{
  color:#0A0A0A
}
</style>
