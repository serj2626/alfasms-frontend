<script lang="ts" setup>
import type { ILinks } from "~/assets/data/types";

defineProps<{
  title: string;
  links: ILinks[];
}>();
</script>
<template>
  <div class="footer-links">
    <NuxtLink class="footer-links__title">{{ title }}</NuxtLink>
    <div class="footer-links__list">
      <NuxtLink
        v-for="link in links"
        :key="link.title"
        class="footer-links__list-item"
        :to="link.link"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 14px;

  &__title {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: color $fast_ease;

    &:hover {
      color: $teal;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    @include mediaMobile {
      grid-template-columns: 1fr;
    }

    &-item {
      cursor: pointer;
      font-size: 14px;
      @include link;
    }
  }
}
</style>
