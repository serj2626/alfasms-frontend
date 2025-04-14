<script lang="ts" setup></script>
<template>
  <NuxtLink to="/" class="header-logo">
    <img src="/header-logo.png" class="header-logo__img" alt="ALFASMS" />
    <p class="header-logo__text">ALFASMS</p>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.header-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 15px 17px;
  cursor: pointer;
  transition: all $default_ease;

  &:active {
    scale: 0.93;
  }

  &__img {
    width: 50px;
    height: auto;
  }
  &__text {
    color: $txt_white;
    font-size: 14px;
    text-transform: uppercase;
  }
}

.header_active {
  .header-logo__text {
    color: $txt;
  }
}
</style>
