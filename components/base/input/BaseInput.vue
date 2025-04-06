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
  <label class="base-input">
    <input
      v-model="inputValue"
      v-maska="maskOptions"
      :class="{'base-input__input_error': error}"
      :type="type"
      class="base-input__input"
    />
    <span v-if="!inputValue" class="base-input__placeholder">{{ placeholder }}</span>
    <small v-if="error" class="base-input__error">{{ error }}</small>
  </label>
</template>
<style lang="scss" scoped>
.base-input {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;

  &__placeholder {
    position: absolute;
    color: #5c6a70;
    padding-left: 11px;
  }

  &__input {
    padding: 9px 19px 9px 11px;
    cursor: auto;
    border-radius: 5px;
    transition: outline $desctop_wide;

    &:focus {
      outline: 1px solid $btn_green;
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
