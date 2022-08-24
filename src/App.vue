<template>
  <div id="app">
  <NavBar v-if="currentRouteName"></NavBar>
  <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import {useRoute} from "vue-router/dist/vue-router";
export default {
  name: 'App',
  data() {
    return {
    }
    },
  components: {
    NavBar
  },
  computed: {
    currentRouteName() {
      if(useRoute().name === "login" || useRoute().name === "registration") {
        return false
      }
      return true
    }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
