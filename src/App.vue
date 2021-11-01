<template>
    <ClassHome />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ClassHome from "./components/ClassHome";

export default {
  name: "App",
  components: {
    ClassHome,
  },
  created() {
    console.log(this.$store.state.count);
    this.$store.dispatch('getData')
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /*max-height: 100vh;*/
}
</style>
