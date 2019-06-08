<template>

  <v-app>
    <v-toolbar app class="navbar">
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>TBD</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="drawer">
      <div class="about">
      <h3>Navegación</h3><br>
      <v-avatar color="indigo">
      <v-icon dark>account_circle</v-icon>
    </v-avatar>
    Usuario
    <br>
    <v-btn color="info">Perfil</v-btn>
    <v-btn color="error">Salir</v-btn>
    <br>
    <br>
      <router-link to="/">Home</router-link><br>
      <router-link to="/about">About</router-link><br>
      <router-link to="/sprint1">Indexación de Tweets</router-link><br>
      <router-link to="/sprint2">Indexación de Usuarios</router-link><br>
      <router-link to="/sprint3">Geolocalización de Tweets</router-link><br>
      </div>
    </v-navigation-drawer>

    <v-content> <router-view/> </v-content>
  </v-app>
</template>

<script>
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
  background-color: #F7F7FF;
}
.about{
  padding-top: 30px;
  text-align: center;
  color: #aaa;
  background-color: blue lighten-5;
}
.about a{
  color:#2D86CE;
  font-family: calibri;
  font-size: 13px;
  text-decoration: none;
  padding:10px;
  margin-top:5px;
}
.navbar {
  background-image: linear-gradient(to right,#98c1d9, #1976d2);
}
</style>
