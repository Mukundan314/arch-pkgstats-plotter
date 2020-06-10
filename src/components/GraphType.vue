<template>
  <div class="graph-type">
    <button
      v-on:click="$emit('input', 'count')"
      :disabled="value === 'count'"
      class="count"
    >Count</button>
    <button
      v-on:click="$emit('input', 'popularity')"
      :disabled="value === 'popularity'"
      class="popularity"
    >Popularity</button>
  </div>
</template>

<script>
export default {
  model: { prop: 'value' },
  props: {
    value: {
      type: String,
      default: 'popularity',
      validator: (value) => ['count', 'popularity'].includes(value),
    },
  },
};
</script>

<style scoped>
.graph-type {
  margin-bottom: 1rem;
}

button {
  width: 50%;
  border-radius: 0;
  font-size: 1rem;
  padding: 0.2rem;
  background: none;
  box-shadow: none;
  border: solid 1px #dbdbdb;
}

button::-moz-focus-inner {
  border: 0;
}

button:hover {
  background: #f5f5f5;
}

button:disabled {
  background-color: #ebebeb;
  color: #333;
}

.count {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-right: 0;
}

.popularity {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>
