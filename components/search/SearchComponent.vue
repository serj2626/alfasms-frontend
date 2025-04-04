<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>
<template>
  <ModalBlockItem>
    <div class="search-component">
      <button class="search-component__close">
        <Icon :name="HeroIcons.CLOSE" size="26" />
        <p class="search-component__title">
          Поиск
        </p>
        <BaseInputIcon class="search-component__search" type="text" placeholder="Поиск в AlfaSMS" :icon="HeroIcons.SEARCH" />
      </button>
    </div>
  </ModalBlockItem>
</template>
<style scoped lang="scss">
.search-component {
  padding: 40px;

  &__clsoe {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  &__title{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__search{
    width: 100%;
    padding: 8px 12px;
  }
}
</style>
