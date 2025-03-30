<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";

defineProps<{
  title: string;
  links: Array<{ link: string; title: string }>;
}>();
</script>
<template>
  <div class="header-mobile-item">
    <p class="header-mobile-item__title">{{ title }}</p>
    <ul class="header-mobile-item__list">
      <NuxtLink
        v-for="link in links"
        :key="link.title"
        class="header-mobile-item__list-item"
        :to="link.link"
      >
        {{ link.title }}
      </NuxtLink>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.header-mobile-item {
  &__title {
    position: relative;
    padding-left: 18px;
    margin-bottom: 4px;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.42;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #688fa1;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &-item {
      line-height: 1.42;
      font-size: 15px;
      padding: 6px 15px 6px 18px;
      @include link;
    }
  }
}
</style>
