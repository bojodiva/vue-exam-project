<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <NavBar/>
  <div>
  <router-view></router-view>
  </div>
  <FooterBar/>
</template>

<script>
// import MyRepos from './components/MyRepos.vue'
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
