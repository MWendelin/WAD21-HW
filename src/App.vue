<template>
  <div id="app">
    <webapp-header />
    <router-view />
    <webapp-footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    "webapp-footer": Footer,
    "webapp-header": Header,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>