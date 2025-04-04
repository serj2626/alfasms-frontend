<script lang="ts" setup>
defineProps<{
  label: string;
}>();
</script>
<template>
  <div class="base-input-checkbox">
    <input type="checkbox" class="base-input-checkbox__element" id="check" />
    <label for="check" class="base-input-checkbox__label">
      {{ label }}
    </label>
  </div>
</template>
<style lang="scss" scoped>
.base-input-checkbox {
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 8px;
  font-weight: 400;
  font-size: 15px;
  &__element {
  }
  &__label {
  }
}
</style>
