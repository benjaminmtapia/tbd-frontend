<template>

  <v-app>
    <v-toolbar app class="navbar">
      <v-toolbar-side-icon title="Menú" @click="drawer=!drawer"></v-toolbar-side-icon>
      <h3> Taller de Bases de Datos </h3>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer class="about" mt-5 app temporary v-model="drawer">
      <div style="margin-top:35px;">
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

    <v-content> <router-view/> 
    
    </v-content>
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
  background-image: url(https://i.stack.imgur.com/nItQK.png);
  background-size: 100% 100%;
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
 background-color: #D4D6FF !important;
 font-family: Arial;
 font-size:15px;
}

</style>
