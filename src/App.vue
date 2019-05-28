<template>

  <v-app>
    <v-toolbar app class="blue lighten-4">
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>TBD</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="drawer">
      <div class="about">
      <h3>Menu aux</h3>
      <a href="/about">About </a>
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
      drawer:true
    }
  }
}
</script>
<style scope>
.about{
  padding-top: 30px;
  text-align: center;
  color: #aaa;
  background-color: blue lighten-5;
}
.about a{
  color:blueviolet;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-decoration: none;
}
</style>
