<script lang="ts" setup>

</script>

<template>
  <Swiper
    :slides-per-view="'auto'"
    :space-between="10"
    class="common-slider"
  >
    <slot />
  </Swiper>
</template>

<style lang="scss" scoped>
.common-slider {
  width: 100%;
  overflow: hidden;
  display: flex;
  margin-top: 28px;

  cursor: url('~/assets/icons/slider-cursor.svg') 0 0, pointer;
}
</style>
