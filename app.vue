<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, watch } from 'vue'

const { locale } = useI18n()

onMounted(() => {
  document.documentElement.lang = locale.value
})

watch(locale, (newLocale) => {
  document.documentElement.lang = newLocale
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>