<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();

</script>
<template>
  <NuxtLayout name="error">
    <div class="error">
      <div class="container">
        <div class="error__content">
          <h1>{{ error.statusCode }}</h1>
          <p>{{ error.message }}</p>
          <span>{{ error.statusMessage }}</span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style scoped lang="scss"></style>
