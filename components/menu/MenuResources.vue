<script lang="ts" setup>
const emit = defineEmits(["close"]);
</script>
<template>
  <div class="menu-resources container" @mouseleave="emit('close')"></div>
</template>
<style lang="scss" scoped>
.menu-resources {
display: none;
}

@keyframes fade-in {
  from {
    opacity: 0;
    scale: 0.9;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
</style>
