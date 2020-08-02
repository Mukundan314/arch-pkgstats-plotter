<template>
  <div class="package-list">
    <div class="heading">
      Packages
    </div>

    <div
      v-for="(packageName, idx) in packageNames"
      :key="packageName"
      class="package"
    >
      <span class="package-name">{{ packageName }}</span>
      <button @click="removePackage(idx)">
        remove
      </button>
    </div>

    <form
      class="package"
      @submit.prevent="addPackage"
    >
      <input
        v-model="addPackageName"
        class="package-name"
        placeholder="Package"
      >
      <button>add</button>
    </form>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'packageNames',
  },
  props: {
    packageNames: {
      type: Array,
      default: () => [],
      validator: (value) => new Set(value).size === value.length,
    },
  },
  data() {
    return { addPackageName: '' };
  },
  methods: {
    addPackage() {
      if (!this.packageNames.includes(this.addPackageName)) {
        this.$emit('input', [...this.packageNames, this.addPackageName]);
        this.addPackageName = '';
      }
    },
    removePackage(idx) {
      this.$emit('input', this.packageNames.filter((_, i) => i !== idx));
    },
  },
};
</script>

<style scoped>
.package-list {
  text-align: left;

  width: 100%;

  border: solid 1px #dbdbdb;
  border-radius: 0.5rem;

  overflow: hidden;
}

.heading, .package {
  padding: 0.7rem 1rem;
}

.heading {
  font-size: 1.1rem;
  background: #f5f5f5;
}

.package {
  display: flex;
  border-top: solid 1px #dbdbdb;
  font-size: 0.9rem;
}

.package-name {
  overflow: auto;
}

input {
  width: 100%;
  border: 0;
  outline: none;
}

button {
  background: none;

  margin-left: auto;
  font-size: 0.75rem;

  box-shadow: none;

  border: solid 1px #dbdbdb;
  border-radius: 0.2rem;
}

button:hover {
  border: solid 1px #b5b5b5;
}
</style>
