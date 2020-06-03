<template>
  <div id="app">
    <package-list v-model="packageNames" />
  </div>
</template>

<script>
import PackageList from './components/PackageList.vue';

export default {
  name: 'App',
  data() {
    return {
      packageNames: [],
    };
  },
  components: {
    PackageList,
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
  margin-top: 60px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
