<script lang="ts" setup>
import type { IContactsImage } from './BaseSwiper.vue';

defineProps<{ images: IContactsImage[] }>();
</script>
<template>
  <swiper-slide v-for="(image, idx) in images" :key="idx">
    <NuxtLink>
      <Icon class="main-partners__image" :name="image.path" :alt="image.alt" />
    </NuxtLink>
  </swiper-slide>
</template>

<style scoped lang="scss"></style>
