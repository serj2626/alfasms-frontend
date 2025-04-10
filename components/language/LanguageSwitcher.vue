<script setup lang="ts">
const { locale, locales } = useI18n();
</script>

<template>
  <select v-model="locale" class="lang-select">
    <option v-for="lang in locales" :key="lang.code" :value="lang.code">
      {{ lang.flag }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.lang-select {
  font-size: 18px;
  outline: none;
  cursor: pointer;
  padding: 6px;

  option {
    background: transparent;
    color: inherit;
  }
}
</style>
