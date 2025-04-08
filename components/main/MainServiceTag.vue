<script lang="ts" setup>
import type { IAction } from './MainCTA.vue';
defineProps<{
  actions: IAction[];
}>();
</script>
<template>
  <NuxtLink
    class="main-service-tag"
    v-for="(action, index) in actions"
    :key="index"
  >
    <Icon :name="action.icon" />
    {{ action.title }}
  </NuxtLink>
</template>

<style scoped lang="scss">
.main-service-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: $txt_white;
  border-radius: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 14px;
  line-height: 1.275;
}
</style>
