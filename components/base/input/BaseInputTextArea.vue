<script setup lang="ts">
interface IInputProps {
  placeholder?: string;
  error?: string;
}

const inputValue = defineModel<string | number>('inputValue');

defineProps<IInputProps>();
</script>
<template>
  <label class="textarea-component">
    <textarea
      v-model="inputValue"
      :class="{ 'textarea-component__textarea--error': error }"
      class="textarea-component__textarea"
    />
    <span v-if="!inputValue" class="textarea-component-placeholder">{{
      placeholder
    }}</span>
    <small v-if="error" class="textarea-component__error">{{ error }}</small>
  </label>
</template>

<style lang="scss" scoped>
.textarea-component {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;

  &-placeholder {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  &__textarea {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #c5c8d4;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 300;

    &--error {
      border-bottom: 1px solid $error;
    }
  }

  &__error {
    color: $error;
  }
}
</style>
