<template>
  <div id="app">
    <div id="first-column">
      <graph-type v-model="graphType" />
      <package-list v-model="packageNames" />
    </div>

    <package-plot
      id="package-plot"
      :graph-type="graphType"
      :package-names="packageNames"
      :start-date="startDate"
      :end-date="endDate"
    />
  </div>
</template>

<script>
import PackageList from './components/PackageList.vue';
import PackagePlot from './components/PackagePlot';
import GraphType from './components/GraphType.vue';

export default {
  name: 'App',
  data() {
    const params = new URLSearchParams(window.location.search);
    const packageNames = params.get('packages') ? params.get('packages').split(',') : [];
    const graphType = params.get('graphType') ? params.get('graphType') : 'popularity';
    const endDate = new Date();

    return {
      packageNames,
      graphType,
      startDate: new Date(2018, 1),
      endDate,
    };
  },
  components: {
    PackageList,
    PackagePlot,
    GraphType,
  },
  watch: {
    packageNames(val) {
      const url = new URL(window.location.href);
      url.searchParams.set('packages', val.join(','));
      window.history.replaceState({}, '', url.toString());
    },
    graphType(val) {
      const url = new URL(window.location.href);
      url.searchParams.set('graphType', val);
      window.history.replaceState({}, '', url.toString());
    },
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
  color: #333;
}

#first-column {
  width: 20%;
  float: left
}

#package-plot {
  height: calc(100vh - 8rem);
  width: 77%;
  float: right;
}
</style>
