<script lang="ts" setup>
interface IButton {
  size: 'xs' |"sm" | "md" | "lg";
  color?: "red" | "green" | "gray" | "blue" | "white";
  view?: "outline" | "fill";
  label: string;
  icon?: string;
  disabled?: boolean;
}

defineProps<IButton>();
</script>

<template>
  <div
    :class="[
      'base-button',
      `base-button__${color}`,
      `base-button__${size}`,
      { 'base-button-fill_disabled': disabled },
    ]"
  >
    <Icon v-if="icon" :name="icon" filled />
    <span class="base-button-fill__title">{{ label }}</span>
  </div>
</template>
<style scoped lang="scss">
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  user-select: none;
  border-radius: $btn_radius;
  border: 1px solid transparent;
  transition: all $fast_ease;
  width: fit-content;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active{
    scale: 0.96;
  }

  &__red {
    background-color: $btn_red;
    color: $txt_white;
    box-shadow: 0 0 10px rgb(255, 252, 252);
  }
  &__green {
    background-color: $btn_green;
    color: $txt_white;
  }
  &__gray {
    background-color: rgba(255,255,255,.12);
    color: $txt_white;
  }
  &__blue {
    background-color: $btn_blue;
    color: $txt_white;
  }
  &__white {
    background-color: $bg_white;
    color: #5c6a70;
    border: 1px solid #5c6a704f;
    box-shadow: 0 5px 12px rgba(69, 80, 84, 0.317)
  }


  &__xs {
    padding: 6px 9px;
  }

  &__sm {
    padding: 6px 12px;
  }

  &__md {
    padding: 8px 16px;
  }

  &__lg {
    padding: 16px 28px;
  }
}
</style>
