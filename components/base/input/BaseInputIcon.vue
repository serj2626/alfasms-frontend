<script setup lang="ts">
import type { MaskInputOptions } from "maska";

type TInputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface IInputProps {
  placeholder?: string;
  error?: string;
  maskOptions?: MaskInputOptions;
  type?: TInputTypes;
  icon: string;
}

const inputValue = defineModel("inputValue");

defineProps<IInputProps>();
</script>
<template>
  <label class="base-input-icon">
    <span class="base-input-icon__icon">
      <Icon class="base-input-icon__icon-img" :name="icon" />
    </span>
    <input
      v-model="inputValue"
      v-maska="maskOptions"
      :placeholder="placeholder"
      :class="{ 'base-input-icon__input_error': error }"
      :type="type"
      class="base-input-icon__input"
    />
  </label>
</template>
<style lang="scss" scoped>
.base-input-icon {
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  background-color: #e9ecef;

  &__input {
    padding: 8px 12px;
    background-color: #fff;

    font-size: 15px;
    outline: 1px solid  #d6e3e3;
    transition: all $default_ease;

    &:focus {
      outline-color: $btn_green;
      border-radius: 5px
    }

    &:placeholder {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
  }

  &__icon-img {
    color: #2125298c;
    width: 16px;
    height: 16px;
  }
}
</style>
