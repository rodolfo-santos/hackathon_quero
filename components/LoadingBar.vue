<template>
  <div class="loading-bar">
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.loading-bar {
  width: 100%;
  height: 4px;
  background-color: #f0f0f0;
}

.bar {
  width: 0;
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s;
}
</style>
