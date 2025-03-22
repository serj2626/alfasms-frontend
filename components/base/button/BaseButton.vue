<script lang="ts" setup>
interface IButton {
  size: "sm" | "md" | "lg";
  color?: "red" | "green" | "gray";
  view?: "outline" | "fill";
  label: string;
  icon?: string;
  disabled?: boolean;
}

const props = defineProps<IButton>();


const classBtn = computed(() => {
  return {
    "base-button__red": props.color === "red",
    "base-button__green": props.color === "green",
    "base-button__gray": props.color === "gray",
  };
})

</script>

<template>
  <div :class="['base-button', 
    { 'base-button-fill_disabled': disabled }]"
  >
    <NuxtIcon v-if="icon" :name="icon" filled />
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
    background-color: $btn_gray;
    color: $txt_white;
  }
}
</style>
