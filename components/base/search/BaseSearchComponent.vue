<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>
<template>
  <ModalBlockItem>
    <div class="base-search-component" @click="$emit('close')">
      <button class="base-search-component__close">
        <Icon :name="HeroIcons.CLOSE" size="26" />
        <p class="base-search-component__title">Поиск</p>
        <BaseInputIcon
          class="base-search-component__search"
          type="text"
          placeholder="Поиск в AlfaSMS"
          :icon="HeroIcons.SEARCH"
        />
      </button>
    </div>
  </ModalBlockItem>
</template>
<style scoped lang="scss">
.base-search-component {
  padding: 40px;
  max-width: 400px;
  width: 100%;

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__search {
    width: 100%;
    padding: 8px 12px;
  }
}
</style>
