<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();
</script>
<template>
  <NuxtLayout>
    <BaseError :error="error" />
  </NuxtLayout>
</template>
