<script lang="ts" setup>
interface IButton {
  size: 'xs' |"sm" | "md" | "lg";
  color?: "red" | "green" | "gray";
  view?: "outline" | "fill";
  label: string;
  icon?: string;
  disabled?: boolean;
}

const props = defineProps<IButton>();
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

  &__red {
    background-color: $btn_red;
    color: $txt_white;
  }
  &__green {
    background-color: $btn_green;
    color: $txt_white;
  }
  &__gray {
    // background-color: $btn_gray;
    background-color: rgba(255, 255, 255, .12);
    color: $txt_white;
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
