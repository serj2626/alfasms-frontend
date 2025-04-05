<script setup lang="ts">
import type { MaskInputOptions } from 'maska';

type TInputTypes =
'button' | 'checkbox' |
'color' | 'date' |
'datetime-local' | 'email' |
'file' | 'hidden' |
'image' | 'month' |
'number' | 'password' |
'radio' | 'range' |
'reset' | 'search' |
'submit' | 'tel' |
'text' | 'time' |
'url' | 'week'

interface IInputProps {
  placeholder?: string;
  error?: string;
  maskOptions?: MaskInputOptions
  type?: TInputTypes;
}

const inputValue = defineModel('inputValue')

defineProps<IInputProps>()
</script>
<template>
  <label class="base-input-component">
    <input
      v-model="inputValue"
      v-maska="maskOptions"
      :class="{'base-input-component__input_error': error}"
      :type="type"
      class="base-input-component__input"
    />
    <span v-if="!inputValue" class="base-input-component-placeholder">{{ placeholder }}</span>
    <small v-if="error" class="base-input-component__error">{{ error }}</small>
  </label>
</template>
<style lang="scss" scoped>
.base-input-component {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  &-placeholder {
    position: absolute;
    // left: 20px;
    // top: 17px;
  }

  &__input {
    // background-color: transparent;
    // border-bottom: 1px solid #C5C8D4;
    // padding: 16px 20px;
    font-size: 16px;
    border-radius: 5px;

    &:focus {
      outline: none;
      // border-bottom: 1px solid red;
    }

    &_error {
      border-bottom: 1px solid $error;
    }
  }

  &__error {
    color: $error;
  }
}
</style>
