<script lang="ts" setup>
const emit = defineEmits(["close"]);
</script>
<template>
  <div class="menu-sub-links" @mouseout="emit('close')"></div>
</template>

<style lang="scss" scoped>
.menu-sub-links {
  position: absolute;
  width: 600px;
  height: 200px;
  border-radius: 18px;
  background-color: teal;
  cursor: pointer;
  top: 80px;;
  animation: show-menu 0.3s ease-in-out;
}

@keyframes show-menu {
  from {
    opacity: 0;
    scaleX: 0.8;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    scaleX: 1;
    transform: translateY(0);
  }
}
</style>
