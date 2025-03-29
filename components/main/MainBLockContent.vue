<script lang="ts" setup></script>
<template>
  <div class="main-block-content">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.main-block-content {
  padding-top: 60px;
  margin-bottom: 16px;

  @include mediaTablet {
    padding-top: 100px;
  }
  @include mediaLaptop {
    padding-top: 140px;
  }
}
</style>
