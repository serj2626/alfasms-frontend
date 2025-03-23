<script lang="ts" setup>
import { HeroIcons } from '~/assets/icons/types/hero-icons';
const showMenu = ref(false);
</script>
<template>
  <div class="menu-navigation">
    <div class="menu-navigation__content">
      <NuxtLink to="/" class="menu-navigation__content-item">
        <span>Главная</span>
      </NuxtLink>
      <Icon :name="HeroIcons.DOWN" size="12" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu-navigation{
  
}
</style>