<template>
  <div id="app">
    <package-list id="package-list" v-model="packageNames" />
    <package-plot
      id="package-plot"
      :package-names="packageNames"
      :start-date="startDate"
      :end-date="endDate"
    />
  </div>
</template>

<script>
import PackageList from './components/PackageList.vue';
import PackagePlot from './components/PackagePlot';

export default {
  name: 'App',
  data() {
    return {
      packageNames: [],
      startDate: new Date(2018, 1),
      endDate: new Date(2020, 1),
    };
  },
  components: {
    PackageList,
    PackagePlot,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 4rem;
  margin-left: 5%;
  margin-right: 5%;
}

#package-list {
  width: 20%;
  float: left
}

#package-plot {
  height: calc(100vh - 8rem);
  width: 77%;
  float: right;
}
</style>
